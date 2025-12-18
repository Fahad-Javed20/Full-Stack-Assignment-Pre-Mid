import express from "express";
import CustomerController from "../controllers/CustomerController";

const router = express.Router();
const customerController = new CustomerController();

router.get("/", customerController.getAllCustomers);

router.get("/:customerId", customerController.getCustomerById);

router.post("/", customerController.createCustomer);

export default router;