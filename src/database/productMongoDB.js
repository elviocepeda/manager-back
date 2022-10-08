import { ProductModel } from "./models/index.js";
import { newProductFormatter, productFormatter } from "../utils/formatter.js";

const getAllProducts = async () => {
  const filter = {};
  const allProducts = await ProductModel.find(filter);
  if (allProducts.length > 0) {
    const formattedProducts = allProducts.map((product) =>
      productFormatter(product)
    );
    return {
      data: formattedProducts,
      success: true,
      message: "",
      status: 200,
    };
  } else
    return {
      data: {},
      success: false,
      message: "Actualmente no hay productos agregados en la base de datos.",
      status: 204,
    };
};

const getOneProduct = async (uuid) => {
  const product = await ProductModel.findOne({ uuid });
  if (product) {
    const formattedProduct = productFormatter(product);
    return {
      data: formattedProduct,
      success: true,
      message: "",
      status: 200,
    };
  } else
    return {
      data: {},
      success: false,
      message: "No hay un producto con ese uuid",
      status: 400,
    };
};

const createProduct = async (newProduct) => {
  const isExist = await ProductModel.findOne({ uuid: newProduct.uuid });
  if (isExist) {
    return {
      data: {},
      success: false,
      message: "Ya existe un producto con ese uuid en la base de datos.",
      status: 401,
    };
  }
  const formattedNewProduct = newProductFormatter(newProduct);
  const product = new ProductModel(formattedNewProduct);
  await product.save();

  return {
    data: {},
    success: true,
    message: "Nuevo producto creado con éxito",
    status: 201,
  };
};

const updateProduct = async (update, uuid) => {
  const editDate = Date.now();
  const data = { ...update, lastEdit: editDate };
  const updated = await ProductModel.updateOne({ uuid }, { $set: data });
  if (!updated)
    return {
      data: {},
      success: false,
      message: "No hay un producto con ese uuid.",
      status: 400,
    };
  else
    return {
      data: {},
      success: true,
      message: "Producto actualizado con éxito.",
      status: 200,
    };
};

const deleteProduct = async (uuid) => {
  const product = await ProductModel.findOne({ uuid });
  if (product) {
    const deletedProduct = await ProductModel.deleteOne({ uuid: product.uuid });
    return {
      data: deletedProduct,
      success: true,
      message: "Producto eliminado con éxito.",
      status: 200,
    };
  } else
    return {
      data: {},
      success: false,
      message: "No existe un producto con ese uuid",
      status: 400,
    };
};

const setProductImage = async (url, uuid) => {
  const updated = await ProductModel.updateOne(
    { uuid },
    { $set: { avatar: url } }
  );
  if (!updated)
    return {
      data: {},
      success: false,
      message: "No existe un usuario con ese uuid.",
      status: 400,
    };
  else
    return {
      data: {},
      success: true,
      message: "Usuario actualizado con éxito.",
      status: 200,
    };
};

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  setProductImage,
};
