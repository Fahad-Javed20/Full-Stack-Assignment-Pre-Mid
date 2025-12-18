import express from "express";
import CustomerController from "../controllers/CustomerController";

const router = express.Router();
const customerController = new CustomerController();

router.get("/customers", customerController.getAllCustomers);
router.post("/customers", customerController.createCustomer);

export default router;
