import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupCaptain } from "../Redux/Slices/CaptainAuthSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const CaptainSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = { name, email, password };

    if (!name || !email || !password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const apiResponse = await dispatch(signupCaptain(captainData));

      if (apiResponse?.payload) {
        navigate('/captain-login'); // Redirect to captain login page if signup is successful
      } else {
        toast.error('Signup failed. Try again later');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-6">
          Captain Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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
              placeholder="Create your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-gray-900 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          <button
            type=""
            className="w-full px-6 py-3 bg-gray-800 text-gray-400 rounded-lg text-lg hover:bg-gray-700 transition duration-300 mt-8"
          >
            <Link to={'/signup'}>Signup as User</Link>
          </button>

          <p className="mt-4 text-center text-gray-400">
            Already have an account?{' '}
            <Link
              to={'/captain-login'}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
