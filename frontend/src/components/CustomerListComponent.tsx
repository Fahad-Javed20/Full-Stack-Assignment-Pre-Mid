import type { CustomerType } from "../types/CustomerType";

interface CustomerListComponentProps {
  customers: CustomerType[];
}

const CustomerListComponent = ({ customers }: CustomerListComponentProps) => {
  return (
    <div className="overflow-x-auto p-5 rounded-lg shadow-md bg-gray-100">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            <th className="py-3 px-4 border border-gray-300 text-left">Name</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Age</th>
            <th className="py-3 px-4 border border-gray-300 text-left">City</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Country</th>
            <th className="py-3 px-4 border border-gray-300 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length ? (
            customers.map((customer) => (
              <tr key={customer.customerId}>
                <td className="py-2 px-4 border border-gray-300">{customer.name}</td>
                <td className="py-2 px-4 border border-gray-300">{customer.age}</td>
                <td className="py-2 px-4 border border-gray-300">{customer.address.city}</td>
                <td className="py-2 px-4 border border-gray-300">{customer.address.country}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <div className="flex gap-2 justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
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
