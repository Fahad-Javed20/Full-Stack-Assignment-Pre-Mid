import HeaderComponent from "./headerComponent";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";
import CustomerFormComponent from "./CustomerFormComponent";
import CustomerListComponent from "./CustomerListComponent";
import { useEffect, useState } from "react";
import type { CustomerType } from "../types/CustomerType";
import TopCustomersComponent from "./TopCustomersComponent";

const CustomerDashboardComponent = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const fetchCustomers = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        const data = await response.json();
        setCustomers(data);
        setError("");
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const handleAddCustomer = (newCustomer: CustomerType) => {
    setCustomers((prevCustomers) => [newCustomer,...prevCustomers]);
  }

  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <HeroComponent />
      <CustomerFormComponent onAddCustomer={handleAddCustomer} />
      <TopCustomersComponent customers={customers} />

      <div className="my-10 px-5 md:px-10">
        {loading && (
          <p className="text-center text-blue-500 font-semibold">
            Loading customers...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {!loading && !error && <CustomerListComponent customers={customers} />}
      </div>

      <FooterComponent />
    </div>
  );
};

export default CustomerDashboardComponent;
