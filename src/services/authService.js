import authMongoDB from "../database/authMongoDB.js";

const login = (email, password) => {
  const response = authMongoDB.login(email, password);
  return response;
};

export default { login };
