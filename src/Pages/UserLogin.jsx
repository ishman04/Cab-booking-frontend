import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/Slices/UserAuthSlice";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Ensure userData is updated here before dispatching
    const userData = {
      email: email,
      password: password
    };
    
    // Check if email and password are provided
    if (!userData.email || !userData.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      // Dispatch loginUser action
      const apiResponse = await dispatch(loginUser(userData));

      // Check if login is successful
      console.log(apiResponse);
      if (apiResponse?.payload) {
        navigate('/'); // Navigate to the home page on success
      } else {
        toast.error('Invalid email address or password');
      }
    } catch (error) {
      // Handle error responses
      if (error.response?.status === 404) {
        toast.error('Invalid email address'); // Show "Invalid email" for 404 errors
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Log In to RideNow
        </h2>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-700 transition duration-200"
          >
            Log In
          </button>

          {/* Link to Sign Up Page */}
          <button type="" className="w-full px-6 py-3 bg-green-700 text-white rounded-lg text-lg hover:bg-green-900 transition duration-200 mt-8">
            <Link to={'/captain-login'} >Login as Captain</Link>
          </button>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <Link
              to={'/signup'}
              className="text-green-500 hover:text-green-700 font-semibold"
            >
              Create a new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
