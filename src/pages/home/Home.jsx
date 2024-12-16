import React from "react";
import Logos from "./Logos";
import Products from "./Products";
import Hero from "../../components/Hero";
import { useFetch } from "../../hooks/useFetch";
import Category from "../../components/category/Category";
import Collection from "../../components/collection/Collection";
import Banner from "./Banner";
import Promotion from "./Promotion";
import Articles from "./Articles";
import Instagram from "./Instagram";
const Home = () => {
  const { data } = useFetch("/product/get");
  const { data: categories } = useFetch("/product/get");

  return (
    <>
      <Hero />
      <Logos />
      <Products
        title={{ name: "Just In", style: "" }}
        style={{
          parent: "container w-full flex overflow-x-auto gap-6 pb-10",
          child: " flex flex-col gap-2 min-w-[262px] font-medium duration-300",
        }}
        condition="NEW"
        isAdmin={false}
        data={data}
      />
      <Category data={categories} />
      <Collection />
      <Products
        style={{
          parent:
            "grid grid-cols-4 gap-6 max-[850px]:grid-cols-2 max-[850px]:p-2 container",
          child: " ",
        }}
        title={{ name: "Best seller", style: "text-center" }}
        isAdmin={false}
        data={data}
        condition="HOT"
      />
      <Banner />
      <Promotion />
      <Articles />
      <Instagram />
    </>
  );
};

export default Home;
