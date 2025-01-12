import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../Redux/Slices/UserAuthSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const UserSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Directly create userData here to avoid relying on async state update
    const userData = {
      name: name,
      email: email,
      password: password
    };

    // Dispatch the signup action
    try {
      const apiResponse = await dispatch(signupUser(userData));

      if (apiResponse?.payload?.data) {
        navigate('/login'); // Redirect to login page if signup is successful
      } else {
        toast.error('Signup failed. Try again later');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Create your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-700 transition duration-200"
          >
            Sign Up
          </button>
          
          {/* Signup as Captain Button */}
          <button className="w-full px-6 py-3 bg-green-700 text-white rounded-lg text-lg hover:bg-green-900 transition duration-200 mt-8">
            <Link to={'/captain-signup'}>Signup as captain</Link>
          </button>
          
          {/* Link to Log In Page */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="text-green-500 hover:text-green-700 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
