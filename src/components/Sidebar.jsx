import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Sidebar = ({ isOpen, onClose }) => {
  const [isPartsMenuOpen, setIsPartsMenuOpen] = useState(false);
  const togglePartsMenu = () => {
    setIsPartsMenuOpen(!isPartsMenuOpen);
  };
  return (
    <aside
      className={`fixed left-0 h-screen w-56 bg-gray-800 text-white p-4 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      {/* Close button for mobile */}
      <div className="lg:hidden absolute top-4 right-4">
        <TiDelete className="text-3xl cursor-pointer" onClick={onClose} />
      </div>
      <nav>
        <ul className="space-y-4 mt-8">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Orders
            </Link>
          </li>
          {/* Parts Management Menu */}
          <li>
            <div
              className="block  py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
              onClick={togglePartsMenu}
            >
              <span className=" flex items-center">
                Parts Management
                <span className=" text-xl">
                <TiArrowSortedDown className={`transform transition-transform ${isPartsMenuOpen ? 'rotate-180' : ''}`} />

                </span>
              </span>
            </div>
            {/* Submenu */}
            {isPartsMenuOpen && (
              <ul className="ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                <li>
                  <Link
                    to="/parts/add"
                    className="block py-1 px-4 rounded hover:bg-gray-700"
                  >
                    Add Parts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parts/edit"
                    className="block py-1 px-4 rounded hover:bg-gray-700"
                  >
                    Edit Parts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parts/update"
                    className="block py-1 px-4 rounded hover:bg-gray-700"
                  >
                    Update Parts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parts/delete"
                    className="block py-1 px-4 rounded hover:bg-gray-700"
                  >
                    Delete Parts
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/reports"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
