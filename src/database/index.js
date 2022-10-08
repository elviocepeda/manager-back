import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${user}:${password}@cluster0.ffkdi0q.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!!!"))
  .catch((e) => console.log("MongoDB error:", e));
