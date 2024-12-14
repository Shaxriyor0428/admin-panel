import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  return (
    <header className="h-[80px] shadow-md header">
      <nav className="flex h-full container justify-between items-center">
        <Link to={"/"} className="font-medium text-[24px] ">
          ELEGANT
        </Link>
        <div className="flex justify-center items-center gap-10">
          <NavLink className={"text-md hover:text-indigo-500"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"text-md hover:text-indigo-500"} to={"/register"}>
            Register
          </NavLink>
          {token ? (
            <NavLink
              className={"text-md hover:text-indigo-500"}
              to={"/admin/create-product"}
            >
              Admin Panel
            </NavLink>
          ) : (
            <NavLink className={"text-md hover:text-indigo-500"} to={"/login"}>
              Login
            </NavLink>
          )}
          <Link className={"text-md hover:text-indigo-500"} >
            Shop
          </Link>
          <NavLink className={"text-md hover:text-indigo-500"} to={"/products"}>
            Products
          </NavLink>
          <Link className={"text-md hover:text-indigo-500"}>Contact us</Link>
        </div>
        <div className="flex gap-4 text-xl justify-center items-center">
          <CiSearch className=" cursor-pointer hover:text-[dodgerblue]" />
          <CiUser className=" cursor-pointer hover:text-[dodgerblue]" />
          <IoBagHandleOutline className=" cursor-pointer hover:text-[dodgerblue]" />
          <p className="cursor-pointer bg-black text-white rounded-full text-md w-6 h-6 flex justify-center items-center hover:text-[dodgerblue]">
            2
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
