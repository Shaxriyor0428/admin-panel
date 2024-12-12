import React from "react";
import Products from "@/components/Products";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { data } = useFetch("/product/get");
  return (
    <div>
      <Products data={data} />
    </div>
  );
};

export default Home;
