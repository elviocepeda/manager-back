import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  uuid: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  brand: {
    type: String,
    default: "",
    required: false,
  },
  quantity: {
    type: String,
    default: "",
    required: true,
  },
  category: {
    type: String,
    default: "",
    required: true,
  },
  createdAt: {
    type: String,
    default: "",
    required: false,
  },
  lastEdit: {
    type: String,
    default: "",
    required: false,
  },
  expirationDate: {
    type: String,
    default: "",
    required: false,
  },
  bought: {
    type: String,
    default: "",
    required: false,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
