/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PagesDropdowns from "../Dropdowns/PagesDropdown";

// components

// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function AuthNavbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="top-0 absolute  z-50 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4  flex items-center justify-between" style={{marginLeft: 'auto',marginRight: "auto"}}>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Shree Netram Optical
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/"
                >
                 <span className=" inline-block ml-2">Home</span>
                </Link>
              </li>
              {/* <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/service"
                >
                 <span className=" inline-block ml-2">Services</span>
                </Link>
              </li> */}

              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/about"
                >
                  <span className=" inline-block ml-2">About</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/eyewear"
                >
                  <span className=" inline-block ml-2">Eyewear</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/sunglass"
                >
                  <span className=" inline-block ml-2">Sunglass</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/login"
                >
                  <span className=" inline-block ml-2">Login</span>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
