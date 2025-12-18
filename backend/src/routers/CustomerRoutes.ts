import { Router } from "express";
import CustomerController from "../controllers/CustomerController";

const router = Router();
const customerController = new CustomerController();

router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);

export default router;
