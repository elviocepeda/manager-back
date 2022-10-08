import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  uuid: {
    type: String,
    default: "",
    required: true,
  },
  role: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 255,
  },
  secondName: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 255,
  },
  secondLastName: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 255,
  },
  birthDate: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    default: "",
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    default: "",
    required: false,
  },
  phone: {
    type: String,
    default: "",
    required: false,
    min: 6,
    max: 1024,
  },
  department: {
    type: String,
    default: "",
    required: true,
    min: 6,
    max: 1024,
  },
  position: {
    type: String,
    default: "",
    required: true,
    min: 6,
    max: 1024,
  },
  antiquity: {
    type: String,
    default: "",
    required: true,
  },
  avatar: {
    type: String,
    default: "",
    required: false,
  },
  createdAt: {
    type: String,
    default: "",
    required: true,
  },
  lastEdit: {
    type: String,
    default: "",
    required: false,
  },
  verified: {
    type: Boolean,
    default: false,
    required: false,
  },
  isConnected: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);