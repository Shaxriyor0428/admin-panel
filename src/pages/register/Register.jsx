import React, { useState } from "react";
import { request } from "../../api";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    if (user.password !== user.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    request
      .post("/auth/signup-admin", user)
      .then((res) => {
        dispatch(signIn(res.data.access_token));
        navigate("/admin");
        e.target.reset();
        setError("");
      })
      .catch((err) => {
        return setError(err.response.data.message.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
