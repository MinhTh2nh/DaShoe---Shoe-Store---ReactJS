import { controller } from "@/services";
import type { Context } from "koa";

interface AddCustomerRequestBody {
  name: string;
  birth: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  gender: string;
}

export const handleGetCustomers = async (ctx: Context): Promise<void> => {
  const { status, data } = await controller.customers.getMany();

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleGetCustomer = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.customers.getOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleAddCustomer= async (ctx: Context): Promise<void> => {
  const body = ctx.request.body as AddCustomerRequestBody;
  const { status, data } = await controller.customers.addOne(body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleUpdateCustomer = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const body = ctx.request.body as AddCustomerRequestBody;
  const { status, data } = await controller.customers.updateOne(id, body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleDeleteCustomer = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.customers.deleteOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};
