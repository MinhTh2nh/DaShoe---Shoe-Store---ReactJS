import { controller } from "@/services";
import { HttpStatusCode } from "@/enums";
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

export const handleGetInvoicesChartData = async (ctx: Context): Promise<void> => {
  ctx.status = HttpStatusCode.Ok;
  ctx.body = {
    "products": [
      {
        "name": "Nike Airfore 1",
        "price": "120",
        "type": "male",
        "style": "Trainning",
        "brand": "nike",
        "size": "35",
        "color": "black",
        "id": 1
      },
      {
        "name": "Nike Airfore 1",
        "price": "120",
        "type": "female",
        "style": "Trainning",
        "brand": "new balance",
        "size": "45",
        "color": "grey",
        "id": 2
      },
      {
        "name": "Nike Air Force 1",
        "price": "120",
        "type": "unisex",
        "style": "Streetwear",
        "brand": "adidas",
        "size": "45",
        "color": "orange",
        "id": 3
      }
    ],
    "invoices": [
      {
        "id": 1,
        "empNo": "E001",
        "status": "Pending",
        "date": "2022-03-23",
        "payment": "Unpaid",
        "customer": "C001",
        "products": [
          {
            "id": 1,
            "name": "Nike Airforce 1",
            "quantity": 2,
            "price": 10.99,
          },
          {
            "id": 2,
            "name": "Nike Airforce 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
      {
        "id": 2,
        "empNo": "E002",
        "status": "Pending",
        "date": "2023-06-14",
        "payment": "Unpaid",
        "customer": "C002",
        "products": [
          {
            "id": 1,
            "name": "Nike Airforce 1",
            "quantity": 2,
            "price": 10.99,
          },
          {
            "id": 2,
            "name": "Nike Airforce 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
      {
        "id": 3,
        "empNo": "E003",
        "status": "Pending",
        "date": "2020-08-10",
        "payment": "Unpaid",
        "customer": "C003",
        "products": [
          {
            "id": 1,
            "name": "Nike Airforce 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
      {
        "id": 4,
        "empNo": "E004",
        "status": "Pending",
        "date": "2021-11-28",
        "payment": "Unpaid",
        "customer": "C004",
        "products": [
          {
            "id": 1,
            "name": "Nike Airforce 1",
            "quantity": 2,
            "price": 10.99,
          },
          {
            "id": 3,
            "name": "Nike Air Force 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
      {
        "id": 5,
        "empNo": "E003",
        "status": "Pending",
        "date": "2022-08-10",
        "payment": "Unpaid",
        "customer": "C003",
        "products": [
          {
            "id": 2,
            "name": "Nike Airforce 1",
            "quantity": 2,
            "price": 10.99,
          },
          {
            "id": 3,
            "name": "Nike Air Force 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
      {
        "id": 6,
        "empNo": "E003",
        "status": "Pending",
        "date": "2023-08-10",
        "payment": "Unpaid",
        "customer": "C003",
        "products": [
          {
            "id": 2,
            "name": "Nike Airforce 1",
            "quantity": 2,
            "price": 10.99,
          },
          {
            "id": 1,
            "name": "Nike Airforce 1",
            "quantity": 1,
            "price": 19.99,
          },
        ],
        "total": 1,
      },
    ],
  };
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
