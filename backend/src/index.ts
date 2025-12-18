import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db";
import CustomerRoutes from "./routers/CustomerRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/customers", CustomerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});