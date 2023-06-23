import { controller } from "@/services";
import type { Context } from "koa";

interface AddInvoiceRequestBody {
  employee_id: number;
  customer_id: number;
  date: string;
  quantity: number;
  unit_price: string;
  status: string;
  payment: string;
}

export const handleGetInvoices = async (ctx: Context): Promise<void> => {
  const { status, data } = await controller.invoices.getMany();

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleGetInvoice = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.invoices.getOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleAddInvoice = async (ctx: Context): Promise<void> => {
  const body = ctx.request.body as AddInvoiceRequestBody;
  const { status, data } = await controller.invoices.addOne(body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleUpdateInvoice = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const body = ctx.request.body as AddInvoiceRequestBody;
  const { status, data } = await controller.invoices.updateOne(id, body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleDeleteInvoice = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.invoices.deleteOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};
