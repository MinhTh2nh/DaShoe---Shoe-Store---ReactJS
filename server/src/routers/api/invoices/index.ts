import Router from "@koa/router";
import {
  handleGetInvoices,
  handleGetInvoice,
  handleAddInvoice,
  handleUpdateInvoice,
  handleDeleteInvoice,
} from "@/controllers";

const router = new Router({
  prefix: "/invoices",
});

router.get("get_invoices", "/", handleGetInvoices);
router.get("get_invoice", "/:id", handleGetInvoice);
router.post("add_invoice", "/", handleAddInvoice);
router.put("update_invoice", "/:id", handleUpdateInvoice);
router.delete("delete_invoice", "/:id", handleDeleteInvoice);

export default router;
