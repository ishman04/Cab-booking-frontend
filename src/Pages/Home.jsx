import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">RideNow</div>
        <nav className="flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-gray-900">
            Features
          </a>
          <Link className="text-gray-700 hover:text-gray-900" to={'/login'}>Login</Link>
          <Link to={'/signup'}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Get There, <span className="text-gray-900">Your Way</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Whether you're heading to work, the airport, or out on the town,
          RideNow has got you covered with reliable rides at the tap of a button.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-700">
            Book a Ride
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg text-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md py-4">
        <div className="text-center text-gray-600">
          © 2025 RideNow. All rights reserved.
        </div>
      </footer>
    </div>

    </>
    
  )
};

export default Home;
