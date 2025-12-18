import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db";
import CustomerRoutes from "./routers/CustomerRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/customers", CustomerRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
