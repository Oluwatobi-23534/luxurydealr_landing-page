import { HashLink } from "react-router-hash-link";

import { useState } from "react";
import "../index.css";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full lg:fixed h-[80px] bg-white border-b">
      <div className="lg:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <h1 className="text-blue-500 font-semibold text-3xl h-[25px]">
          <HashLink to="/#top">LUXURY DEALR</HashLink>
        </h1>
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-4">
            <li className="p-4 hover:bg-gray-100">
              <HashLink to="/#top">Home</HashLink>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <HashLink to="/products#products-top">Products</HashLink>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <HashLink to="/order#order-top">Order</HashLink>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <HashLink smooth to="/#delivery">
                Delivery
              </HashLink>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <HashLink smooth to="/#meeting">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden" onClick={handleClick}>
          <img src={toggle ? close : menu} alt="menu" className="h-8 w-auto" />
        </div>
      </div>

      <nav
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 lg:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <HashLink to="/#top">Home</HashLink>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <HashLink to="/products#products-top">Products</HashLink>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <HashLink to="/order#order-top">Order</HashLink>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <HashLink smooth to="/#delivery">
              Delivery
            </HashLink>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <HashLink smooth to="/#meeting">
              Contact Us
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
