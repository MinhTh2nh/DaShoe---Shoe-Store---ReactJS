import http from "node:http";
import path from "node:path";
import "reflect-metadata";
import Koa from "koa";
import koaLogger = require("koa-logger");
import bodyParser = require("koa-bodyparser");
import session = require("koa-session");
import serve from "koa-static";
import cors from "@koa/cors";
import config from "@/config";
import router from "@/routers";
import logger from "@/logger";
import { database, passport } from "@/services";

export const app = new Koa();

export const start = async (): Promise<void> => {
    const PORT = process.env.PORT || config.servers.api.port || 2000;

    await database.mariadb.connect();

    const koaKeys = Array.isArray(config.koa.keys) ? config.koa.keys : config.koa.keys.trim().split(/, /g);

    logger.info("Mounting routers...");
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err: any) {
            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                message: err.message,
            };
            logger.error(err);
        }
    });

    app.keys = koaKeys;
    app.use(bodyParser());
    app.use(
        session(
            {
                domain: config.koa.session.domain,
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
                renew: true,
                maxAge: config.koa.session.max_age,
            },
            app
        )
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(
        koaLogger((str) => {
            logger.info(str);
        })
    );
    app.use(
        cors({
            allowMethods: "GET,PUT,POST,DELETE,PATCH",
            credentials: true,
        })
    );
    app.use(serve(path.join(__dirname, "../../", "/public")));
    app.use(router.routes()).use(router.allowedMethods());

    logger.info("Mounted routers");

    http.createServer(app.callback()).listen(PORT, () => {
        // passport.setup();
        logger.info(`Server is listening on port ${PORT}`);
    });
};

export const stop = async (): Promise<void> => {
    logger.info("Stopping server...");
};

export default app;
