import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";


const VRProductDetails = () => {

  const [vrHeadsets, setVRHeadsets] = useState([]);

  useEffect(() => {
    const fetchVRHeadsets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/vr-headsets"
        );
        setVRHeadsets(response.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchVRHeadsets();
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 lg:pt-28 pt-12">
      <h1 className="text-4xl font-bold mt-4 border-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 shadow-lg">
        VR Headsets
      </h1>
      <iframe
        title="Promo Video"
        frameBorder="0"
        src="https://promo.com/embed/6579f3c85f5db859c2745b22?ratioAspect=square&type=preview"
        allowFullScreen={true}
        className="my-4 w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto rounded-lg shadow-lg overflow-hidden p-2 sm:p-4"
        style={{ aspectRatio: "16/9" }}
      ></iframe>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-8xl mb-6 p-12">
        {vrHeadsets.map((headset, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              {headset.name}
            </h2>
            <div className="carousel w-full">
              <Carousel>
                {headset.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="w-full">
                    <img
                      src={`http://localhost:7000${image}`}
                      alt={`${headset.name} ${imageIndex + 1}`}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <p className="mt-4 text-sm text-blue-900 border border-gray-300 p-2 w-full h-20 overflow-auto">
              {headset.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default VRProductDetails;
