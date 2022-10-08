import { Router } from "express";
import productController from "../../controllers/productController.js";
import { multerUploadSettings } from "../../utils/multerStorage.js";

const router = Router();
const filetypes = /jpeg|jpg|png/;
const errorMessage = "Solo imagenes en formato jpeg, jpg, png!";
const type = "image";
const uploadSettings = multerUploadSettings(filetypes, errorMessage, type);

router
  .get("/", productController.getAllProducts)
  .get("/:uuid", productController.getOneProduct)
  .post("/", productController.createProduct)
  .patch("/:uuid", productController.updateProduct)
  .delete("/:uuid", productController.deleteProduct)
  .post("/set-image/:uuid", uploadSettings, productController.setProductImage);

export default router;
