import type { CustomerType } from "../types/CustomerType";

interface TopCustomersComponentProps {
  customers: CustomerType[];
}

const TopCustomersComponent = ({ customers }: TopCustomersComponentProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 p-4">Top Customers</h2>
      <div>
        {customers && customers.length ? (
          <div className="flex justify-center gap-4">
            {customers.slice(0, 5).map((customer) => (
              <div key={customer.customerId} className="flex flex-col items-center w-36">
                <img
                  className="w-36 h-36 rounded-full object-cover"
                  src={customer.imageUrl}
                  alt={customer.name}
                />
                <p className="font-semibold mt-2 text-center">{customer.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No customers available.</p>
        )}
      </div>
    </div>
  );
};

export default TopCustomersComponent;
