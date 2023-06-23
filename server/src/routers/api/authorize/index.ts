import Router from "@koa/router";
import apiAuthorizeSignOutRouter from "./signout";

const router = new Router({
    prefix: "/authorize",
});

router.use(apiAuthorizeSignOutRouter.routes(), apiAuthorizeSignOutRouter.allowedMethods());

export default router;
