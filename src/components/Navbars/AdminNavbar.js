import React from "react";

import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <div class="relative md:ml-64 bg-gray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-black md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap    md:px-10 px-4">
            {/* Brand */}
            <a
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Dashboard
            </a>
            {/* Form */}
            <form className="md:flex hidden flex-row    items-center lg:ml-auto mr-3">
              <div className="relative flex w-full    items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute    text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
      </div>
      {/* End Navbar */}
    </>
  );
}
