import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import Products from "../../../components/Products";

const ManageProduct = () => {
  const { data } = useFetch("product/get");
  return (
    <div>
      <Products data={data} isAdmin={true} />
    </div>
  );
};

export default ManageProduct;
