import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/product/get/${id}`);

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full md:w-1/2 h-96 object-contain rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">{data?.name}</h2>
          <p className="text-gray-600">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
