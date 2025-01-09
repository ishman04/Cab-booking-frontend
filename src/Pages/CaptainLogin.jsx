import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setUserData({
      email: email,
      password: password
    })
    console.log(userData)
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <>
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
            <button type="" className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg hover:bg-yellow-700 transition duration-200 mt-8">
              <Link to={'/login'} >Login as User</Link>
            </button>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{' '}
              <Link
                to={'/captain-signup'}
                className="text-yellow-500 hover:text-yellow-700 font-semibold"
              >
                Create a new account
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
};

export default CaptainLogin;