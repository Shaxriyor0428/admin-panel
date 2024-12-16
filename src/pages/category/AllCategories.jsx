import React, { useEffect, useState } from "react";
import { request } from "../../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await request.get("/product-category/get");
        setCategories(res.data);
      } catch (err) {
        alert("Xatolik kategoriyalarni ko'rishda");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirm("Do you really want delete this category? Are you Sure ?")) {
        const res = await request.delete(`/product-category/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        alert("You successfully deleted category");
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      }
    } catch (err) {
      alert("Xatolik kategoriyani o'chirishda xatolik");
      console.error(err.response.data);
    }
  };

  const handleEditCategory = (id) => {
    try {
      if (id) {
        return navigate(`/create-category?q=${id}`);
      }
    } catch (error) {
      alert("Xatolik kategoriyani o'chirishda xatolik");
    }
  };

  const categoryItems = categories.map((item) => (
    <div
      key={item.id}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center mb-4"
    >
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>

      <div className="flex gap-5">
        <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => handleEditCategory(item.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
          All Categories
        </h1>

        {loading ? (
          <div className="text-center text-gray-500 text-2xl">
            <h2>Loading...</h2>
          </div>
        ) : categories.length > 0 ? (
          <div className="grid gap-6">{categoryItems}</div>
        ) : (
          <div className="text-center text-gray-500 text-2xl">
            <h2>No categories available</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCategories;
