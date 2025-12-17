interface CustomerFormProps {
  onAddCustomer: (customer: CustomerType) => void;
}

import { useForm } from "react-hook-form";

type CustomerType = {
  customerId: number;
  name: string;
  imageUrl: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};

const CustomerFormComponent = ({ onAddCustomer }: CustomerFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerType>();

  const onSubmit = (data: CustomerType) => {
    onAddCustomer(data);
    reset();
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-5">
      <div className="bg-white shadow-lg p-8 min-w-full max-w-2xl">
        <h1 className="text-3xl font-semibold rounded-2xl px-10 py-1 mb-6 w-fit mx-auto">
          Customer Form
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-lg mx-auto"
        >
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Name:</label>
            <input
              {...register("name", { required: true, maxLength: 50 })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                This field is required and max length is 50
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Image URL:
            </label>
            <input
              {...register("imageUrl", { required: true })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter image URL"
            />
            {errors.imageUrl && (
              <span className="text-red-500 text-sm mt-1">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Age:</label>
            <input
              type="number"
              {...register("age", { required: true, min: 0, max: 120 })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter age"
            />
            {errors.age && (
              <span className="text-red-500 text-sm mt-1">
                This field is required and must be between 0 and 120
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">City:</label>
            <input
              {...register("address.city", { required: true, maxLength: 50 })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter city"
            />
            {errors.address?.city && (
              <span className="text-red-500 text-sm mt-1">
                This field is required and max length is 50
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Country:</label>
            <input
              {...register("address.country", {
                required: true,
                maxLength: 50,
              })}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter country"
            />
            {errors.address?.country && (
              <span className="text-red-500 text-sm mt-1">
                This field is required and max length is 50
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-[#547792] text-white font-semibold py-2 px-4 rounded w-3/5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerFormComponent;
