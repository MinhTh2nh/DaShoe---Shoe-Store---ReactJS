import { Customer, Employee, Invoice, InvoiceDetail } from "@/models";
import { HttpStatusCode } from "@/enums";

interface InvoiceInfo {
  employee_id: number;
  customer_id: number;
  date: string;
  quantity: number;
  unit_price: string;
  status: string;
  payment: string;
}

export const getMany = async (): Promise<{
  status: number;
  data: {
    invoices?: Array<Invoice>;
    error?: string;
  };
}> => {
  try {
    const invoices = await Invoice.find();

    return {
      status: HttpStatusCode.Ok,
      data: { invoices },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const getOne = async (
  id: string | number,
): Promise<{
  status: number;
  data: {
    invoice?: Invoice;
    error?: string;
  };
}> => {
  try {
    const invoice = await Invoice.findOne({
      where: { invoice_id: Number(id) },
    });

    if (!invoice) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No invoice found",
        },
      };
    }

    return {
      status: HttpStatusCode.Ok,
      data: { invoice },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const addOne = async (
  invoiceInfo: InvoiceInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const employee = await Employee.findOne({
      where: {
        employee_id: invoiceInfo.employee_id,
      },
    });

    if (!employee) {
      return {
        status: HttpStatusCode.BadRequest,
        data: {
          message: "The employee does not exist in the database",
        },
      };
    }

    const customer = await Customer.findOne({
      where: {
        customer_id: invoiceInfo.customer_id,
      },
    });

    if (!customer) {
      return {
        status: HttpStatusCode.BadRequest,
        data: {
          message: "The customer does not exist in the database",
        },
      };
    }

    const invoice = new Invoice();

    invoice.employee = employee;
    invoice.status = invoiceInfo.status;
    invoice.payment = invoiceInfo.payment;

    const invoiceDetail = new InvoiceDetail();

    invoiceDetail.invoice = invoice;
    invoiceDetail.customer = customer;
    invoiceDetail.date = invoiceInfo.date;
    invoiceDetail.quantity = invoiceInfo.quantity;
    invoiceDetail.unit_price = invoiceInfo.unit_price;

    await invoice.save();
    await invoiceDetail.save();

    return {
      status: HttpStatusCode.Created,
      data: {
        message: "Added invoice to the database",
      },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const updateOne = async (
  id: string | number,
  invoiceInfo: InvoiceInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const invoice = await Invoice.findOne({
      where: { invoice_id: Number(id) },
    });

    if (!invoice) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No invoice found",
        },
      };
    }



    await invoice.save();

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Updated invoice in the database",
      },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const deleteOne = async (
  id: string | number,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    await Invoice.delete({
      invoice_id: Number(id),
    });

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Deleted invoice from the database",
      },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};
