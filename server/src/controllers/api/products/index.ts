import { controller } from "@/services";
import type { Context } from "koa";

interface AddProductRequestBody {
  name: string;
  price: number;
  color: string;
  size: number;
  type: string;
  style: string;
  brand: string;
}

export const handleGetProducts = async (ctx: Context): Promise<void> => {
  const { status, data } = await controller.products.getMany();

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleGetProduct = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.products.getOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleAddProduct = async (ctx: Context): Promise<void> => {
  const body = ctx.request.body as AddProductRequestBody;
  const { status, data } = await controller.products.addOne(body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleUpdateProduct = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const body = ctx.request.body as AddProductRequestBody;
  const { status, data } = await controller.products.updateOne(id, body);

  ctx.status = status;
  ctx.body = { ...data };
};

export const handleDeleteProduct = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const { status, data } = await controller.products.deleteOne(id);

  ctx.status = status;
  ctx.body = { ...data };
};
