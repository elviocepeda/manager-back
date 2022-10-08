import cors from "cors";
import dotenv from "dotenv";
import v1UserRouter from "./v1/routes/userRoutes.js";
import v1AuthRouter from "./v1/routes/authRoutes.js";
import v1ProductRouter from "./v1/routes/productRoutes.js";
import "./database/index.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./v1/routes/docs/api.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());
app.use("/avatar", express.static("./src/database/avatar"));
app.use("/api/v1.0/users", v1UserRouter);
app.use("/api/v1.0/auth", v1AuthRouter);
app.use("/api/v1.0/products", v1ProductRouter);
app.use("/api/v1.0/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
