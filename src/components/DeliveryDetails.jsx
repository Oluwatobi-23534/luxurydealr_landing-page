import React from "react";
import { HashLink } from "react-router-hash-link";

const DeliveryDetails = () => {
  return (
    <div className="bg-blue-50 p-10">
      <h1 className="text-blue-900 text-4xl font-bold mb-6">
        Welcome to Our Ordering Process
      </h1>
      <ol className="list-decimal list-inside text-blue-700 mb-6">
        <li className="mb-4">
          Begin by providing your information and selecting the goods and
          quantities you desire. Once you click 'submit,' a voucher with
          detailed pricing will be sent to your email for confirmation.
        </li>
        <li className="mb-4">
          Following submission, you will be prompted to select two important
          dates. The first is for a video call to address any questions, discuss
          your order, and confirm the authenticity of the products that will be
          delivered to you. The second selection is for the delivery date of
          your ordered products. These dates will also be included in your
          voucher, ensuring seamless coordination.
        </li>
        <li>
          We understand the value of your time and the importance of a smooth
          ordering process. Feel free to reach out if you have any questions or
          need assistance at any stage.
        </li>
      </ol>
      <HashLink
        smooth
        to="/order#order-top"
        className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300"
      >
        Place your order now
      </HashLink>
    </div>
  );
};

export default DeliveryDetails;
