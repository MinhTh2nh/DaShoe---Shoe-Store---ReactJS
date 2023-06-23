import { HttpStatusCode } from "@/enums";
import type { Context, Next } from "koa";

export const isSignedIn = async (ctx: Context, next: Next): Promise<void> => {
    if (ctx.isUnauthenticated() || !ctx.session!.passport.user) {
        ctx.status = HttpStatusCode.Unauthorized;
        ctx.body = {
            error: "Unauthorized",
        };
        return;
    }

    await next();
};
