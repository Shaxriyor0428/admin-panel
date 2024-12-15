import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="h-[80px] shadow-md bg-white sticky top-0 z-50">
      <nav className="flex h-full container mx-auto px-4 justify-between items-center relative">
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="text-[30px] max-[800px]:block hidden"
          >
            <IoMenu />
          </button>
        </div>

        <Link
          to="/"
          className="font-bold text-[28px] max-[800px]:w-[75%] max-[800px]:pl-2"
        >
          ELEGANT
        </Link>

        <div className="flex gap-10 max-[800px]:hidden text-nowrap">
          <NavLink className="text-md hover:text-indigo-500" to="/">
            Home
          </NavLink>
          <NavLink className="text-md hover:text-indigo-500" to="/register">
            Register
          </NavLink>
          {token ? (
            <NavLink
              className="text-md hover:text-indigo-500"
              to="/admin/create-product"
            >
              Admin Panel
            </NavLink>
          ) : (
            <NavLink className="text-md hover:text-indigo-500" to="/login">
              Login
            </NavLink>
          )}
          <Link className="text-md hover:text-indigo-500" to="#">
            Shop
          </Link>
          <NavLink className="text-md hover:text-indigo-500" to="/products">
            Products
          </NavLink>
          <Link className="text-md hover:text-indigo-500" to="#">
            Contact us
          </Link>
        </div>

        <div className="flex gap-4 text-2xl items-center">
          <CiSearch className="cursor-pointer hover:text-[dodgerblue]" />
          <CiUser className="cursor-pointer hover:text-[dodgerblue]" />
          <IoBagHandleOutline className="cursor-pointer hover:text-[dodgerblue]" />
          <p className="cursor-pointer bg-black text-white rounded-full text-md w-6 h-6 flex items-center justify-center hover:text-[dodgerblue]">
            2
          </p>
        </div>

        {open && (
          <div className="absolute top-[80px] left-0 bg-white shadow-md w-full flex flex-col gap-5 py-4 px-6 z-10">
            <NavLink
              className="text-md hover:text-indigo-500"
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="text-md hover:text-indigo-500"
              to="/register"
              onClick={closeMenu}
            >
              Register
            </NavLink>
            {token ? (
              <NavLink
                className="text-md hover:text-indigo-500"
                to="/admin/create-product"
                onClick={closeMenu}
              >
                Admin Panel
              </NavLink>
            ) : (
              <NavLink
                className="text-md hover:text-indigo-500"
                to="/login"
                onClick={closeMenu}
              >
                Login
              </NavLink>
            )}
            <Link
              className="text-md hover:text-indigo-500"
              to="#"
              onClick={closeMenu}
            >
              Shop
            </Link>
            <NavLink
              className="text-md hover:text-indigo-500"
              to="/products"
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <Link
              className="text-md hover:text-indigo-500"
              to="#"
              onClick={closeMenu}
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
