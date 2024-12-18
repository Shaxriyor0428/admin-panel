import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/product/get/${id}`);

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      {data ? (
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-gray-800">
              {data.name}
            </h2>
            <p className="text-lg text-gray-700">{data.description}</p>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-green-600">
                ${data.price}
              </span>
              <span className="text-sm text-gray-500">
                Stock: {data.stock}{" "}
                {data.stock > 0 ? "available" : "out of stock"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-2xl">
                {"★".repeat(Math.round(data.average_rating))}
                {"☆".repeat(5 - Math.round(data.average_rating))}
              </span>
              <span className="text-gray-500">
                ({data.average_rating} out of 5)
              </span>
            </div>

            <div className="text-sm text-gray-500">
              <p>Created At: {new Date(data.createdAt).toLocaleDateString()}</p>
              <p>Updated At: {new Date(data.updatedAt).toLocaleDateString()}</p>
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-medium">Category ID:</span>{" "}
              {data.categoryId}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      )}
    </div>
  );
};

export default Detail;
