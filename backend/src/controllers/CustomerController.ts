import { Request, Response } from "express";
import Customer from "../models/CustomerModel";

class CustomerController {
  async getAllCustomers(req: Request, res: Response) {
    Customer.find()
      .then((customers) => res.json(customers))
      .catch((err) => res.status(500).json({ error: err.message }));
  }

  async createCustomer(req: Request, res: Response) {
    const newCustomer = new Customer(req.body);
    newCustomer.save()
      .then((customer) => res.status(201).json(customer))
      .catch((err) => res.status(400).json({ error: err.message }));
  }
}

export default CustomerController;
