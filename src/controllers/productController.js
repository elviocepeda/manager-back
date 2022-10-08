import { sendError } from "../utils/index.js";
import productService from "../services/productService.js";
import createProductSchema from "./schemas/createProductSchema.js";
import updateProductSchema from "./schemas/updateProductSchema.js";
import { responseFormatter } from "../utils/formatter.js";

const getAllProducts = async (req, res) => {
  const response = await productService.getAllProducts();
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const getOneProduct = async (req, res) => {
  const response = await productService.getOneProduct(req.params.uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const createProduct = async (req, res) => {
  const { error } = createProductSchema.validate(req.body);
  if (error) {
    return sendError(res, "Schema error", 400);
  }
  const response = await productService.createProduct(req.body);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const updateProduct = async (req, res) => {
  const { error } = updateProductSchema.validate(req.body);
  if (error) {
    return sendError(res, "Schema error", 400);
  }
  const response = await productService.updateProduct(
    req.body,
    req.params.uuid
  );
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const deleteProduct = async (req, res) => {
  const response = await productService.deleteProduct(req.params.uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const setProductImage = async (req, res) => {
  const { uuid } = req.params;
  const extension = req.file.originalname.split(".").pop();

  const path = `product/${uuid}.${extension}`;

  const response = await productService.setProductImage(path, uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  setProductImage,
};
