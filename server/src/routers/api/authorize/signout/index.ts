import Router from "@koa/router";
import { handleSignOut } from "@/controllers/api/authorize/signout";
import { isSignedIn } from "@/middlewares";

const router = new Router({
    prefix: "/signout",
});

router.use(isSignedIn);

router.get("authorize_signout", "/", handleSignOut);

export default router;
