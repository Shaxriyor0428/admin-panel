import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  return (
    <header className="h-[80px] shadow-md header">
      <nav className="flex h-full container justify-center items-center gap-10">
        <NavLink className={"text-xl hover:text-indigo-500"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"text-xl hover:text-indigo-500"} to={"/register"}>
          Register
        </NavLink>
        {token ? (
          <NavLink className={"text-xl hover:text-indigo-500"} to={"/admin/create-product"}>
            Admin Panel
          </NavLink>
        ) : (
          <NavLink className={"text-xl hover:text-indigo-500"} to={"/login"}>
            Login
          </NavLink>
        )}
        <NavLink
          className={"text-xl hover:text-indigo-500"}
          to={"/create-category"}
        >
          Create category
        </NavLink>
        <NavLink
          className={"text-xl hover:text-indigo-500"}
          to={"/see-category"}
        >
          See all categories
        </NavLink>
        <NavLink
          className={"text-xl hover:text-indigo-500"}
          to={"/see-one-category"}
        >
          See one category By ID
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
