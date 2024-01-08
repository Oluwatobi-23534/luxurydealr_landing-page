import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import "../index.css";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full lg:fixed h-auto bg-white border-b z-50 py-6 lg:py-0">
      <div className="lg:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <h1 className="text-blue-500 font-semibold text-3xl h-[25px]">
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
            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  to="/#top"
                >
                  Home
                </HashLink>
              </div>
            </li>
            <li className="lg:py-6 py-4 text-center">
              <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                <HashLink
                  className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                  to="/#about"
                  onClick={() => {
                    if (toggle) handleClick();
                  }}
                >
                  About
                </HashLink>
              </div>
            </li>
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
            <SignedIn>
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
            </SignedIn>
            <SignedOut>
              <li className="lg:py-6 py-4 text-center">
                <div className="bg-slate-300 px-4 py-2 rounded lg:bg-transparent lg:p-0">
                  <HashLink
                    className="sm:text-xl sm:rounded lg:rounded-none lg:text-base text-blue-500 hover:text-blue-700 font-bold transition-all duration-200 lg:hover:underline sm:p-2 lg:bg-transparent"
                    onClick={() => setShowModal(true)}
                  >
                    Order
                  </HashLink>
                </div>
              </li>
            </SignedOut>
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
            <SignedOut>
              <li className="py-4 sm:flex sm:items-center sm:justify-center">
                <Link to="/sign-in">
                  <SignInButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </Link>
              </li>
            </SignedOut>
          </ul>
        </nav>
        <div className="lg:hidden" onClick={handleClick}>
          <img src={toggle ? close : menu} alt="menu" className="h-8 w-auto" />
        </div>
      </div>
      {showModal && (
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
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
