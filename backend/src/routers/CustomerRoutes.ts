import express from "express";
import CustomerController from "../controllers/CustomerController";

const router = express.Router();
const customerController = new CustomerController();

router.get("/customers", customerController.getAllCustomers.bind(customerController));
router.get("/customers/:customerId", customerController.getCustomerById.bind(customerController));
router.post("/customers", customerController.createCustomer.bind(customerController));

export default router;
