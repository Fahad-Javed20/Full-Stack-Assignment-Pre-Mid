import { Request, Response } from "express";
import Customer from "../models/CustomerModel";

class CustomerController {
  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      const newCustomer = new Customer(req.body);
      const customer = await newCustomer.save();
      res.status(201).json(customer);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async getCustomerById(req: Request, res: Response) {
    try {
      const id = req.params.customerId; 
      const customer = await Customer.findById(id);
      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(customer);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CustomerController;
