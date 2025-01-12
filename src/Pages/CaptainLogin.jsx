import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginCaptain } from "../Redux/Slices/CaptainAuthSlice";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const captainData = { email, password };
    
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const apiResponse = await dispatch(loginCaptain(captainData));

      if (apiResponse?.payload) {
        navigate('/'); // Redirect to captain's dashboard on success
      } else {
        toast.error('Invalid email address or password');
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error('Invalid email address');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-6">
          Captain Log In
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-gray-900 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>

          <button type="" className="w-full px-6 py-3 bg-gray-800 text-gray-400 rounded-lg text-lg hover:bg-gray-700 transition duration-300 mt-8">
            <Link to={'/login'}>Login as User</Link>
          </button>
          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{' '}
            <Link
              to={'/captain-signup'}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Create a new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainLogin;
