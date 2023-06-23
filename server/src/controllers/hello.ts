import type { Context } from "koa";

export const handleHello = (ctx: Context) => {
    ctx.body = "pri nay drac a nhe";
};
