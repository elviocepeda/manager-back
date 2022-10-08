import { sendError } from "../utils/index.js";
import userService from "../services/userService.js";
import createUserSchema from "./schemas/createUserSchema.js";
import updateUserSchema from "./schemas/updateUserSchema.js";
import { responseFormatter } from "../utils/formatter.js";

const getAllUsers = async (req, res) => {
  const response = await userService.getAllUsers();
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const getOneUser = async (req, res) => {
  const response = await userService.getOneUser(req.params.uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const createUser = async (req, res) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return sendError(res, "Schema error", 400);
  }
  const response = await userService.createUser(req.body);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const updateUser = async (req, res) => {
  const { error } = updateUserSchema.validate(req.body);
  if (error) {
    return sendError(res, "Schema error", 400);
  }
  const response = await userService.updateUser(req.body, req.params.uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const deleteUser = async (req, res) => {
  const response = await userService.deleteUser(req.params.uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, "Email inválido", 401);
  const response = await userService.forgotPassword(email);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const setPassword = async (req, res) => {
  const { password } = req.body;
  const { uuid } = req.user;
  const response = await userService.setPassword(password, uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

const setAvatar = async (req, res) => {
  const { uuid } = req.params;
  const extension = req.file.originalname.split(".").pop();

  const path = `avatar/${uuid}.${extension}`;
  
  const response = await userService.setAvatar(path, uuid);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

export default {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  forgotPassword,
  setPassword,
  setAvatar,
};