import type { CustomerType } from "../types/CustomerType";

interface CustomerListComponentProps {
  customers: CustomerType[];
}

const CustomerListComponent = ({ customers }: CustomerListComponentProps) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Age</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">City</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Country</th>
          </tr> 
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">{customer.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{customer.age}</td>
              <td className="py-2 px-4 border-b border-gray-300">{customer.address.city}</td>
              <td className="py-2 px-4 border-b border-gray-300">{customer.address.country}</td>
            </tr> 
          ))}
        </tbody>
      </table>  
      
    </div>
  );
};

export default CustomerListComponent;