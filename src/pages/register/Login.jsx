import React, { useState } from "react";
import { request } from "../../api";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const user = Object.fromEntries(formData);
    setLoading(true);
    setError("");

    request
      .post("/auth/signin-admin", user)
      .then((res) => {
        dispatch(signIn(res.data.access_token));
        event.target.reset();
        navigate("/create-category");
      })
      .catch((err) => {
        setError(
          err.response.data?.message.message || "Login failed. Please try again."
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Login
        </h2>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
