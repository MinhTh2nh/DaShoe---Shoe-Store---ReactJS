import Router from "@koa/router";
import apiRouter from "./api";
import { handleHello } from "@/controllers";

const router = new Router();

router.use(apiRouter.routes(), router.allowedMethods());

router.get("root", "/", handleHello);
router.get("abc", "/error", (ctx) => {
    throw new Error("Vai lon chim cu cac buom");
});
router.get("abc", "/query", (ctx) => {
    console.log(ctx.query);
});

export default router;
