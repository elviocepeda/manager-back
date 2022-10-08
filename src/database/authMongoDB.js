import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "./models/index.js";
import { userFormatter } from "../utils/formatter.js";

const login = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user)
    return {
      data: {},
      success: false,
      message: "No existe un usuario con ese email.",
      status: 404,
    };

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return {
      data: {},
      success: false,
      message: "Los datos no coinciden con un usuario registrado.",
      status: 401,
    };

  const { uuid } = user;
  const token = jwt.sign({ uuid }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "120m",
  });

  const formattedUser = userFormatter(user);
  return {
    data: { user: formattedUser },
    token,
    success: true,
    message: "",
    status: 200,
  };
};

export default { login };
