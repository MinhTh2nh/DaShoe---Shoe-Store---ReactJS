import { Shoe } from "@/models";
import { HttpStatusCode } from "@/enums";

interface ShoeInfo {
  name: string;
  price: number;
  color: string;
  size: number;
  type: string;
  style: string;
  brand: string;
}

export const getMany = async (): Promise<{
  status: number;
  data: {
    products?: Array<Shoe>;
    error?: string;
  };
}> => {
  try {
    const products = await Shoe.find();

    return {
      status: HttpStatusCode.Ok,
      data: { products },
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
    product?: Shoe;
    error?: string;
  };
}> => {
  try {
    const product = await Shoe.findOne({
      where: { shoe_id: Number(id) },
    });

    if (!product) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No product found",
        },
      };
    }

    return {
      status: HttpStatusCode.Ok,
      data: { product },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};

export const addOne = async (
  product: ShoeInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const shoe = new Shoe();

    shoe.shoe_name = product.name;
    shoe.shoe_price = product.price;
    shoe.color = product.color;
    shoe.size = product.size;
    shoe.type = product.type;
    shoe.style = product.style;
    shoe.brand = product.brand;

    await shoe.save();

    return {
      status: HttpStatusCode.Created,
      data: {
        message: "Added product to the database",
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
  newProduct: ShoeInfo,
): Promise<{
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}> => {
  try {
    const product = await Shoe.findOne({
      where: { shoe_id: Number(id) },
    });

    if (!product) {
      return {
        status: HttpStatusCode.NotFound,
        data: {
          error: "No product found",
        },
      };
    }

    product.shoe_name = newProduct.name;
    product.shoe_price = newProduct.price;
    product.color = newProduct.color;
    product.size = newProduct.size;
    product.type = newProduct.type;
    product.style = newProduct.style;
    product.brand = newProduct.brand;

    await product.save();

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Updated product in the database",
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
    await Shoe.delete({
      shoe_id: Number(id),
    });

    return {
      status: HttpStatusCode.Ok,
      data: {
        message: "Deleted product from the database",
      },
    };
  } catch (err: any) {
    return {
      status: HttpStatusCode.InternalServerError,
      data: { error: err.message },
    };
  }
};
