import type { CustomerType } from "../types/CustomerType";

interface CustomerListComponentProps {
  customers: CustomerType[];
}

const CustomerListComponent = ({ customers }: CustomerListComponentProps) => {
  return (
    <div className="overflow-x-auto bg-gray-100 p-5 rounded-lg shadow-md">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead style={{ backgroundColor: "#213448" }} className=" text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Age</th>
            <th className="py-3 px-4 text-left">City</th>
            <th className="py-3 px-4 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td className="py-2 px-4">{customer.name}</td>
              <td className="py-2 px-4">{customer.age}</td>
              <td className="py-2 px-4">{customer.address.city}</td>
              <td className="py-2 px-4">{customer.address.country}</td>
              <td className="py-2 px-4">
                <div className="flex gap-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {customers.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerListComponent;
