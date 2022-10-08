import userMongo from "../database/userMongoDB.js";

const getAllUsers = () => {
  const response = userMongo.getAllUsers();
  return response;
};

const getOneUser = (uuid) => {
  const response = userMongo.getOneUser(uuid);
  return response;
};

const createUser = (newUser) => {
  const response = userMongo.createUser(newUser);
  return response;
};

const updateUser = (update, uuid) => {
  const response = userMongo.updateUser(update, uuid);
  return response;
};

const deleteUser = (uuid) => {
  const response = userMongo.deleteUser(uuid);
  return response;
};

const forgotPassword = (email) => {
  const response = userMongo.forgotPassword(email);
  return response;
};

const setPassword = (newPwd, uuid) => {
  const response = userMongo.setPassword(newPwd, uuid);
  return response;
};

const setAvatar = (url, uuid) => {
  const response = userMongo.setAvatar(url, uuid);
  return response;
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
