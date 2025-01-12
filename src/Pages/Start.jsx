import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/Slices/UserAuthSlice";

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="bg-[url('https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-no-repeat bg-cover min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-50 text-white shadow-md">
        <div className="text-3xl font-bold"> <span className="text-red-600 text-5xl">R</span>ide<span className="text-red-600 text-5xl">N</span>ow</div>
        <nav className="flex space-x-6 justify-center items-center">
          <a href="#about" className="text-red-600 hover:text-white font-bold">
            About
          </a>
          <a href="#features" className="text-red-600 hover:text-white font-bold">
            Features
          </a>
          {isLoggedIn ? (
            <Link
              onClick={handleLogout}
              className="text-red-600 hover:text-white"
            >
              Logout
            </Link>
          ) : (
            <Link
              to={'/login'}
              className="px-4 py-1 text-red-600 font-bold text-lg rounded-md hover:bg-red-600 hover:text-white transition duration-200 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Get There, <span className="text-red-600">Your Way</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
          Whether you're heading to work, the airport, or out on the town,
          RideNow has got you covered with reliable rides at the tap of a button.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700">
            Book a Ride
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white shadow-md py-4">
        <div className="text-center text-gray-400">
          © 2025 RideNow. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
