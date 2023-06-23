import Router from "@koa/router";
import {
  handleGetProducts,
  handleGetProduct,
  handleAddProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} from "@/controllers";

const router = new Router({
  prefix: "/products",
});

router.get("get_products", "/", handleGetProducts);
router.get("get_product", "/:id", handleGetProduct);
router.post("add_product", "/", handleAddProduct);
router.put("update_product", "/:id", handleUpdateProduct);
router.delete("delete_product", "/:id", handleDeleteProduct);

export default router;
