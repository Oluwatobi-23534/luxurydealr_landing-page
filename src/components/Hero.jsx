import React from "react";
import '../index.css'
import About from './About';
import { heroImg } from "../assets";
import DeliveryDetails from "./DeliveryDetails";
import Meeting from "./Meeting";

const Hero = () => {
  return (
    <div id="top" className="w-full bg-white p-6 py-24">
      <div className="lg:max-w-[1480px] m-auto grid lg:grid-cols-2 max-w-[600px]">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-3xl text-[#3b82f6] font-medium">
            Creating Opportunities for Affordable Luxury.
          </p>
          <h1 className="lg:leading-[72px] py-2 text-start lg:text-4xl text-2xl font-semibold">
            The <span className="text-[#3b82f6]">Luxury Dealr</span> is your gateway to affordable luxury, offering a
            diverse range of <span className="text-[#3b82f6]">high-end products</span>, from tech gadgets to
            high-performance vehicles. Experience the finer things in life
            without breaking the bank with us.
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Join The Luxury Dealr for a wider selection of quality electronics,
            expert marketing, and opportunities for increased sales and growth.
          </p>

          
        </div>
        <img
          src={heroImg}
          alt="hero-pic"
          className="lg:order-last order-first h-80 w-auto shadow-lg lg:mt-0 lg:ml-16 mt-8 rounded-lg"
        />
      </div>

      <section id="about" className="pt-20">
        <About />
      </section>
      <section id="delivery" className="pt-20">
        <DeliveryDetails />
      </section>
      <section id="meeting" className="pt-20">
        <Meeting />
      </section>
    </div>
  );
};

export default Hero;
