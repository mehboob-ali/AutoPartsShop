import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle, MdCircleNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { TiThMenu } from 'react-icons/ti';

const TopNavBar = ({ onMenuClick }) => {
  return (
    <header className="bg-gray-800 sticky top-0  text-white p-4 flex items-center justify-between">
      {/* Left Section: Logo and Menu Icon */}
      <div className="flex items-center space-x-2">
        <TiThMenu
          className="text-3xl cursor-pointer lg:hidden"
          onClick={onMenuClick}
        />
        <Link to="/" className="text-2xl lg:text-3xl">
          Autoparts
        </Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="hidden lg:flex items-center w-1/2">
        <input
          type="search"
          className="w-full bg-gray-700 p-2 rounded-xl text-lg"
          placeholder="Search by brand, vehicle, part name"
        />
        <BsSearch className="ml-2 text-2xl lg:text-3xl" />
      </div>

      {/* Right Section: Profile and Notification Icons */}
      <div className="flex items-center space-x-4">
        <Link to= "/profile"><MdAccountCircle className="text-3xl" /></Link>
        <MdCircleNotifications className="text-3xl" />
      </div>
    </header>
  );
};

export default TopNavBar;
