import { HttpStatusCode } from "@/enums";
import type { Context } from "koa";

export const handleSignOut = async (ctx: Context): Promise<void> => {
    if (ctx.isUnauthenticated()) {
        ctx.status = HttpStatusCode.Unauthorized;
        ctx.body = {
            error: "You have not sign in yet",
        };
        return;
    }

    await ctx.logout();
    ctx.redirect("back");
};
