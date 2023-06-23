import Router from "@koa/router";
import {
  handleGetCustomers,
  handleGetCustomer,
  handleAddCustomer,
  handleUpdateCustomer,
  handleDeleteCustomer,
} from "@/controllers";

const router = new Router({
  prefix: "/customers",
});

router.get("get_customers", "/", handleGetCustomers);
router.get("get_customer", "/:id", handleGetCustomer);
router.post("add_customer", "/", handleAddCustomer);
router.put("update_customer", "/:id", handleUpdateCustomer);
router.delete("delete_customer", "/:id", handleDeleteCustomer);

export default router;
