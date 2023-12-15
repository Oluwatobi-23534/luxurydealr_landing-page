import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const vrHeadsets = [
  {
    name: "Play station VR2 headset",
    images: [
      require("./images/Playstation-VR2-headset1.png"),
      require("./images/Playstation-VR2-headset2.png"),
    ],
  },
  {
    name: "Meta Oculus Quest 2 headset",
    images: [
      require("./images/Meta-Oculus-Quest-2-headset1.png"),
      require("./images/Meta-Oculus-Quest-2-headset2.png"),
    ],
  },
  {
    name: "Apple VR headset",
    images: [
      require("./images/Apple-VR-headset1.png"),
      require("./images/Apple-VR-headset2.png"),
    ],
  },
  {
    name: "Meta Quest 3 headset",
    images: [
      require("./images/Meta-Quest-3-headset1.png"),
      require("./images/Meta-Quest-3-headset2.png"),
    ],
  },
  {
    name: "Meta Quest Pro headset",
    images: [
      require("./images/Meta-Quest-Pro-headset1.png"),
      require("./images/Meta-Quest-Pro-headset2.png"),
    ],
  },
  {
    name: "Pico 4 VR headset",
    images: [
      require("./images/Pico-4-VR-headset1.png"),
      require("./images/Pico-4-VR-headset2.png"),
    ],
  },
  {
    name: "Apara 5K VR headset",
    images: [
      require("./images/Apara-5K-VR-headset1.png"),
      require("./images/Apara-5K-VR-headset2.png"),
    ],
  },
  {
    name: "Vive Focus 3 headset",
    images: [
      require("./images/Vive-Focus-3-headset1.png"),
      require("./images/Vive-Focus-3-headset2.png"),
    ],
  },
  {
    name: "Bigscreen Beyond VR headset",
    images: [
      require("./images/Bigscreen-beyond-VR-headset1.png"),
      require("./images/Bigscreen-beyond-VR-headset2.png"),
    ],
  },
  {
    name: "Logitech Chorus Speaker add-on",
    images: [
      require("./images/Logitech-Chorus-Speaker-add-on1.png"),
      require("./images/Logitech-Chorus-Speaker-add-on2.png"),
    ],
  },
];

const VRProductDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 pt-28">
      <h1 className="text-4xl font-bold mt-4 border-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 shadow-lg">
        VR Headsets
      </h1>
      <iframe
        title="Promo Video"
        frameBorder="0"
        width="100%"
        height="100%"
        src="https://promo.com/embed/6579f3c85f5db859c2745b22?ratioAspect=square&type=preview"
        allowFullScreen={true}
        className="my-4 w-1/2 sm:w-3/8 md:w-1/4 lg:w-1/3 xl:w-1/4 mx-auto rounded-lg shadow-lg overflow-hidden p-2 sm:p-4"
        style={{ aspectRatio: "1" }}
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
                      src={image}
                      alt={`${headset.name} ${imageIndex + 1}`}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VRProductDetails;
