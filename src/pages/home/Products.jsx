import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Products = ({
  data,
  isAdmin,
  style: { parent, child },
  title,
  condition,
}) => {
  const [like, setLike] = useState({});
  const navigate = useNavigate();

  const handleLike = (id) => {
    setLike((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleImage = (prod) => {
    navigate(`/detail/${prod.id}`);
  };

  const productItems = data?.map((item) => (
    <div key={item.id} className={child}>
      <div className="group relative overflow-hidden">
        <img
          onClick={() => handleImage(item)}
          className="bg-no-repeat bg-center w-full h-[350px] object-cover rounded-md"
          src={item?.image}
          alt={item?.name}
        />
        <span className="text-[16px] font-bold absolute bg-white top-4 left-4 py-1 px-2 rounded-md">
          {condition}
        </span>

        <button
          onClick={() => handleLike(item.id)}
          className={`absolute top-4 right-4 bg-white text-[25px] w-9 h-9 text-center flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            like[item.id] ? "text-red-500" : "text-black"
          }`}
        >
          <CiHeart />
        </button>

        <div className="w-full flex justify-center items-center absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="py-[9px] px-[74px] rounded-md bg-black text-white">
            Add to Cart
          </button>
        </div>
      </div>

      <p className="flex gap-1 text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </p>
      <p className="line-clamp-1">{item?.description}</p>
      <p>{item?.name}</p>

      <span className="block font-bold text-lg">
        ${Number(item?.price).toLocaleString()}
      </span>
    </div>
  ));

  return (
    <>
      <div className="w-full container">
        <h2
          className={`text-[40px] leading-10 font-medium mb-12 ${title?.style}`}
        >
          {title.name}
        </h2>
      </div>
      <div className={parent}>{productItems}</div>
    </>
  );
};

export default Products;
