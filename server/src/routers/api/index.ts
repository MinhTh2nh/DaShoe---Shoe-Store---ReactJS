import Router from "@koa/router";
import authorizeRouter from "./authorize";
import productsRouter from "./products";
import customersRouter from "./customers";
import invoicesRouter from "./invoices";

const router = new Router({
    prefix: "/api",
});

router.use(authorizeRouter.routes(), authorizeRouter.allowedMethods());
router.use(productsRouter.routes(), productsRouter.allowedMethods());
router.use(customersRouter.routes(), customersRouter.allowedMethods());
router.use(invoicesRouter.routes(), invoicesRouter.allowedMethods());

export default router;
