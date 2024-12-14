import React, { useEffect, useState } from "react";
import { request } from "../api";

const ProductCreate = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    console.log(product);
    product.price = parseFloat(product.price);
    product.categoryId = parseInt(product.categoryId, 10);
    product.stock = parseInt(product.stock, 10);
    product.average_rating = 0;

    request
      .post("/product/create", product)
      .then((res) => {
        console.log(res);
        setError("");
        e.target.reset();
        alert("Product created successfully");
      })
      .catch((err) =>
        setError("Something went wrong")
      );
  };

  useEffect(() => {
    request
      .get("/product-category/get")
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Create Product
        </h2>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <form onSubmit={handleCreate} className="flex flex-col gap-5">
          <div>
            <label className="block mb-2 text-gray-600">Product Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Description</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="description"
              rows="4"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Price</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="price"
              min="0"
              step="0.01"
              placeholder="Enter price"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Image URL</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="image"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Stock</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="stock"
              min="0"
              step="1"
              placeholder="Enter stock quantity"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Category</label>
            <select
              name="categoryId"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              {categories.length > 0 ? (
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option disabled>Loading...</option>
              )}
            </select>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
