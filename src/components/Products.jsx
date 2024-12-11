import React from "react";

const Products = ({ data }) => {
  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-4 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-lg text-green-600 font-bold mb-2">
          {product.price} USD
        </p>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-10 flex gap-6 flex-wrap justify-center">
      {productItems}
    </div>
  );
};

export default Products;
