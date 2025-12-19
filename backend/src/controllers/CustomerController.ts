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
      const lastCustomer = await Customer.findOne().sort({ customerId: -1 });
      const newCustomerId = lastCustomer ? lastCustomer.customerId + 1 : 1;

      const newCustomer = new Customer({
        ...req.body,
        customerId: newCustomerId, 
      });

      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  getCustomerById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.customerId);
      const customer = await Customer.findOne({ customerId: id });
      if (!customer) {
        return res.status(404).json({ 
          error: `Customer with customerId ${id} not found.` 
        });
      }

      res.json(customer);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default CustomerController;

