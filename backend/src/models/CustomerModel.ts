import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customerId: { type: Number, required: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  age: { type: Number, required: true },
  address: {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
