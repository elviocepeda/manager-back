import { UserModel, PwdTokenModel } from "../database/models/index.js";
import { sendError } from "../utils/index.js";
import jwt from "jsonwebtoken";

export const authMiddleware = () => {
  return async (req, res, next) => {
    try {
      const token = req.header("Authorization");
      if (!token) sendError(res, "Parametros inválidos", 400);
      const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
      const isVerified = jwt.verify(token, JWT_PRIVATE_KEY);
      if (isVerified) next();
    } catch (err) {
      return sendError(res, "Sin autorización", 401);
    }
  };
};

export const verifyPwdToken = async (req, res, next) => {
  const { token, uuid } = req.query;
  if (!token || !uuid) return sendError(res, "Parametros inválidos", 401);

  const user = await UserModel.findOne({ uuid });
  if (!user) return sendError(res, "No se encontró un usuario con ese id", 400);

  const resetToken = await PwdTokenModel.findOne({ owner: user.email });
  if (!resetToken)
    return sendError(res, "No se encontró el token en la base de datos", 400);

  req.user = user;
  next();
};
