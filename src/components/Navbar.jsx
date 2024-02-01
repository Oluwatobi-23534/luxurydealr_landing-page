import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import "../index.css";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";
import { list } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full lg:fixed h-auto bg-white border-b z-50 py-6 lg:py-0">
      <div className="lg:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <h1 className="text-blue-500 font-semibold text-3xl h-[25px] lg:ml-0 ml-4">
          <HashLink to="/#top">LUXURY DEALR</HashLink>
        </h1>

        <nav
          className={`${
            toggle
              ? "absolute top-8 right-0 mt-12 bg-zinc-100 p-2 px-8 py-0 rounded shadow-lg z-10"
              : "hidden"
          } lg:flex items-center justify-center w-full lg:w-auto`}
        >
          <ul
            className={`${
              toggle ? "flex flex-col gap-y-0.5 py-2" : "hidden"
            } lg:flex lg:space-y-0 gap-10`}
          >
            <div className="flex items-center lg:gap-8 gap-16 mr-20 lg:py-0 py-4">
              <input
                type="text"
                placeholder="Search"
                className="lg:ml-4 p-2 rounded-md bg-blue-200 text-white sm:block"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md sm:block">
                Search
              </button>
            </div>

            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  to="/products#products-top"
                  onClick={() => {
                    if (toggle) handleClick();
                  }}
                >
                  Products
                </HashLink>
              </div>
            </li>

            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  to="/order#order-top"
                  onClick={() => {
                    if (toggle) handleClick();
                  }}
                >
                  Order
                </HashLink>
              </div>
            </li>

            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  smooth
                  to="/#delivery"
                  onClick={() => {
                    if (toggle) handleClick();
                  }}
                >
                  Delivery
                </HashLink>
              </div>
            </li>
            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  smooth
                  to="/#meeting"
                  onClick={() => {
                    if (toggle) handleClick();
                  }}
                >
                  Contact Us
                </HashLink>
              </div>
            </li>

            <li className="py-4 sm:flex sm:items-center sm:justify-center relative lg:ml-20">
              <Link to="/sign-in">
                <button className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-32">
                  Login
                </button>
                <div className="absolute top-2 right-0 z-10 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </div>
              </Link>
              <Link to="/bucket-list">
                <img
                  src={list}
                  alt=""
                  className="absolute top-1/2 right-0 z-0 transform -translate-y-1/2"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden" onClick={handleClick}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-8 w-auto px-4"
          />
        </div>
      </div>
      {/* {showModal && (
        <div className="fixed top-0 right-0 mt-4 mr-4 z-50">
          <div className="bg-blue-200 p-4 rounded shadow-lg">
            <p className="text-blue-900">
              You must be signed in to place an order.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="text-red-500 hover:text-red-700"
            >
              ✕ {/* This is a "close" icon (a multiplication sign) */}
      {/* </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
