import { Customer } from "@/models";
import { HttpStatusCode } from "@/enums";

interface CustomerInfo {
  name: string;
  birth: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  gender: string;
}

export const getMany = async (): Promise<{
  status: number;
  data: {
    customers?: Array<Customer>;
    error?: string;
  };
}> => {
  try {
    const customers = await Customer.find();

    return {
      status: HttpStatusCode.Ok,
      data: { customers },
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
    customer?: Customer;
    error?: string;
  };
}> => {
  try {
    const customer = await Customer.findOne({
      where: { customer_id: Number(id) },
    });

    if (!customer) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No customer found",
        },
      };
    }

    return {
      status: HttpStatusCode.Ok,
      data: { customer },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const addOne = async (
  customerInfo: CustomerInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const customer = new Customer();

    customer.customer_name = customerInfo.name;
    customer.customer_dob = customerInfo.birth;
    customer.customer_address = customerInfo.address;
    customer.customer_city = customerInfo.city;
    customer.customer_phone = customerInfo.phone;
    customer.customer_email = customerInfo.email;
    customer.customer_gender = customerInfo.gender;

    await customer.save();

    return {
      status: HttpStatusCode.Created,
      data: {
        message: "Added customer to the database",
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
  customerInfo: CustomerInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const customer = await Customer.findOne({
      where: { customer_id: Number(id) },
    });

    if (!customer) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No customer found",
        },
      };
    }

    customer.customer_name = customerInfo.name;
    customer.customer_dob = customerInfo.birth;
    customer.customer_address = customerInfo.address;
    customer.customer_city = customerInfo.city;
    customer.customer_phone = customerInfo.phone;
    customer.customer_email = customerInfo.email;
    customer.customer_gender = customerInfo.gender;

    await customer.save();

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Updated customer in the database",
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
    await Customer.delete({
      customer_id: Number(id),
    });

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Deleted customer from the database",
      },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};
