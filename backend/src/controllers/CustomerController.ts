import { Request, Response } from "express";
import Customer from "../models/CustomerModel";

class CustomerController {
  getAllCustomers = async (req: Request, res: Response) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  createCustomer = async (req: Request, res: Response) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Request body is empty" });
      }
      const newCustomer = new Customer(req.body);
      const customer = await newCustomer.save();
      res.status(201).json(customer);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}

export default CustomerController;
