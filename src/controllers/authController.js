import authService from "../services/authService.js";
import { loginSchema } from "./schemas/loginSchema.js";
import { responseFormatter } from "../utils/formatter.js";

const roles = (req, res) => {
  const response = {
    data: [
      { id: 1, role: "admin", name: "admin" },
      { id: 2, role: "default", name: "usuario" },
    ],
    success: true,
    message: "",
  };
  res.json(response);
};

const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ error });

  const { email, password } = req.body;

  const response = await authService.login(email, password);
  const formattedResponse = responseFormatter(response);

  res.status(response.status).json(formattedResponse);
};

export default { roles, login };
