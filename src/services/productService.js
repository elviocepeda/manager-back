import productMongo from "../database/productMongoDB.js";

const getAllProducts = () => {
  const response = productMongo.getAllProducts();
  return response;
};

const getOneProduct = (uuid) => {
  const response = productMongo.getOneProduct(uuid);
  return response;
};

const createProduct = (newProduct) => {
  const response = productMongo.createProduct(newProduct);
  return response;
};

const updateProduct = (update, uuid) => {
  const response = productMongo.updateProduct(update, uuid);
  return response;
};

const deleteProduct = (uuid) => {
  const response = productMongo.deleteProduct(uuid);
  return response;
};

const setProductImage = (url, uuid) => {
  const response = productMongo.setAvatar(url, uuid);
  return response;
};

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  setProductImage,
};
