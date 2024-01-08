import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeElectronics = [
  {
    name: "Hisense Uhd Smart TV With Bluetooth +3 Hdmi",
    description:
      "A high-definition smart TV from Hisense that offers a rich and immersive viewing experience. It comes with Bluetooth connectivity and 3 HDMI ports for multiple device connections.",
    images: [
      require("./images/Hisense-smartTV.jpg"),
      require("./images/Hisense-smartTV2.jpg"),
    ],
  },
  {
    name: "Sumec Firman A6000E2 4.2kva Generator",
    description:
      "A reliable power generator from Sumec Firman with a capacity of 4.2kva. It's designed for durability and efficient power supply, making it an excellent choice for power backup.",
    images: [
      require("./images/Firman-Generator.jpg"),
      require("./images/Firman-Generator.jpg"),
    ],
  },
  {
    name: "Maxi 90/60cm With Auto Ignition Oven",
    description:
      "A versatile cooking appliance from Maxi with auto ignition feature. It has a sleek design and is equipped with 4 gas burners and 2 electric burners, providing a variety of cooking options.",
    images: [
      require("./images/Gas-cooker.jpg"),
      require("./images/Gas-cooker.jpg"),
    ],
  },
  {
    name: "Rite-tek Air Fryer",
    description:
      "A modern kitchen appliance from Rite-tek that uses hot air circulation for frying, reducing the need for oil and making your meals healthier.",
    images: [
      require("./images/Airfryer.jpg"),
      require("./images/Airfryer.jpg"),
    ],
  },
  {
    name: "Usha Mixer Blender & Grinder",
    description:
      "A multi-functional kitchen appliance from Usha that can mix, blend, and grind ingredients. It's designed for convenience and efficiency, making food preparation easier.",
    images: [require("./images/Blender.jpg"), require("./images/Blender.jpg")],
  },
  {
    name: "LG Xboom On2d",
    description:
      "A powerful speaker from LG's Xboom series that delivers high-quality sound. It's perfect for parties and gatherings, enhancing your audio experience.",
    images: [require("./images/Xboom.jpg"), require("./images/Xboom2.jpg")],
  },
  {
    name: "Refrigerator",
    description:
      "A home appliance that uses thermally insulated compartments to store food at a temperature below room temperature, slowing down the bacterial growth rate and keeping the food fresh for a longer period.",
    images: [
      require("./images/Refridgerator.jpg"),
      require("./images/Refridgerator2.jpg"),
    ],
  },
  {
    name: "Split Inverter Air Conditioner",
    description:
      "An air conditioner that uses inverter technology to control the speed of its compressor, adjusting its cooling capacity based on the needs. It's energy-efficient and provides consistent cooling.",
    images: [
      require("./images/Airconditioner.jpg"),
      require("./images/Airconditioner2.jpg"),
    ],
  },
  {
    name: "Microwave Oven",
    description:
      "A kitchen appliance that uses high-frequency electromagnetic waves, known as microwaves, to heat food. It's a convenient tool for quickly heating or cooking food.",
    images: [
      require("./images/Microwave.jpg"),
      require("./images//Microwave2.jpg"),
    ],
  },
  {
    name: "Washing Machine",
    description:
      "A home appliance designed to wash laundry. It automates the process of washing clothes, saving time and reducing physical effort.",
    images: [
      require("./images/Washingmachine.jpg"),
      require("./images/Washingmachine.jpg"),
    ],
  },
];





const HomeElectronicsDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 lg:pt-28 pt-12">
      <h1 className="text-4xl font-bold mt-4 border-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 shadow-lg">
        Home Electronics
      </h1>
      <iframe
        title="Promo Video"
        frameBorder="0"
        src="https://promo.com/embed/658c5d3bc1bfb77d627dbbc2?ratioAspect=wide&type=preview"
        allowFullScreen={true}
        className="my-4 w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto rounded-lg shadow-lg overflow-hidden p-2 sm:p-4"
        style={{ aspectRatio: "16/9" }}
      ></iframe>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-8xl mb-6 p-12">
        {HomeElectronics.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              {product.name}
            </h2>
            <div className="carousel w-full">
              <Carousel>
                {product.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="w-full">
                    <img
                      src={image}
                      alt={`${product.name} ${imageIndex + 1}`}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <p className="mt-4 text-sm text-blue-900 border border-gray-300 p-2 w-full h-20 overflow-auto">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeElectronicsDetails