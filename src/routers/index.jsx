import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Auth from "../pages/auth/Auth";
import Category from "../pages/category/Category";
import AllCategories from "../pages/category/AllCategories";
import OneCategory from "../pages/category/One-category";
import CreateProduct from "../pages/admin/create-product/CreateProduct";
import ManageProduct from "../pages/admin/manage-product/ManageProduct";
import ManageCategory from "../pages/admin/manage-category/ManageCategory";
import CreateCategory from "../pages/admin/create-category/CreateCategory";
import { useFetch } from "../hooks/useFetch";
import Products from "../components/Products";
import Detail from "../pages/detail/Detail";

const Router = () => {
  const { data } = useFetch("/product/get");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products data={data} />} />
        <Route path="detail/:id" element={<Detail/>} />
      </Route>

      <Route path="/" element={<Auth />}>
        <Route path="admin" element={<Admin />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="manage-category" element={<ManageCategory />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="see-one-category" element={<OneCategory />} />
          <Route path="create-category" element={<Category />} />
          <Route path="see-category" element={<AllCategories />} />
        </Route>
      </Route>
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Router;
