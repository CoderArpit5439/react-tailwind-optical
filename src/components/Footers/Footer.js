import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Explore Special Eyewear @ Shree Netram</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-600">
              A trusted brands in eyewear, offers a diverse range of glasses and lenses. With our seamless online shopping experience and doorstep delivery, finding the perfect eyewear has never been easier. Explore stylish frames, blue cut lenses, and more at Shree Netram Optical today!
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">

                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=61556067072946&mibextid=LQQJ4d"
                    target="_blank"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </button>

                <button
                  className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <a
                    href="https://www.instagram.com/shree_netram_optical?igsh=ejltY3Ezbm5xdmZx"
                    target="_blank"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </button>


              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex  flex-wrap  items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                      to='/about'
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                       >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex  flex-wrap  items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto   " style={{ marginLeft: 'auto', marginRight: "auto" }}>
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <a
                  href=""
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Created By Er. Arpit Sharma
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
