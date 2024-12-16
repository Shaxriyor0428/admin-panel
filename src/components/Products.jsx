import React, { useState } from "react";
import { FaRegHeart, FaTrashAlt, FaEdit } from "react-icons/fa";
import { request } from "../api";
import { toggleDelete } from "../redux/slices/reload-slice";
import { useDispatch } from "react-redux";
import Modal from "../pages/admin/Modal";
import ProductEdit from "../pages/admin/ProductEdit";
import { useNavigate } from "react-router-dom";

const Products = ({ data, isAdmin }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure?")) {
        await request.delete(`product/delete/${id}`);
        return dispatch(toggleDelete(true));
      }
    } catch (error) {
      alert("Ma'lumotni o‘chirishda xatolik");
    } finally {
      // return dispatch(toggleDelete(false));
    }
  };

  const handleEdit = (prod) => {
    setSelectedProduct(prod);
    setOpen(true);
  };

  const handleImage = (prod) => {
    navigate(`/detail/${prod.id}`);
  };

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-4 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        onClick={() => handleImage(product)}
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
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4">
          {isAdmin && (
            <div className="flex gap-4">
              <button onClick={() => handleDelete(product.id)}>
                <FaTrashAlt className="text-xl" />
              </button>
              <button onClick={() => handleEdit(product)}>
                <FaEdit className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container mx-auto px-4 py-10 flex gap-6 flex-wrap justify-center">
        {productItems}
      </div>

      {open && selectedProduct && (
        <Modal>
          <ProductEdit
            edit_data={selectedProduct}
            close={() => setOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default Products;
