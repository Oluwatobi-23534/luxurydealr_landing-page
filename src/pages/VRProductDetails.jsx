import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const vrHeadsets = [
  {
    name: "Play station VR2 headset",
    description:
      "Experience stunning visuals with the OLED display boasting a resolution of 2000 x 2040 per eye and a refresh rate of 90Hz or 120Hz. Easily adjustable lens separation and a wide field of view of approximately 110 degrees enhance immersion. The headset incorporates advanced motion sensing technology, 4 embedded cameras, and IR eye tracking. Enjoy tactile feedback, seamless USB Type-C® connectivity to PS5, and crystal-clear audio with built-in microphone and stereo headphone jack.",
    images: [
      require("./images/Playstation-VR2-headset1.png"),
      require("./images/Playstation-VR2-headset2.png"),
    ],
  },
  {
    name: "Meta Oculus Quest 2 headset",
    description:
      "Immerse yourself in the Meta Quest 2 VR experience featuring a fast-switch LCD display with 1832 x 1920 resolution per eye and 60, 72, or 90 Hz refresh rate. Benefit from 6DOF tracking, redesigned Touch Controllers, and positional audio for realistic immersion. Access a wide range of apps and games through the Meta Quest Store and choose from 128GB or 256GB storage options for your entertainment needs.",
    images: [
      require("./images/Meta-Oculus-Quest-2-headset1.png"),
      require("./images/Meta-Oculus-Quest-2-headset2.png"),
    ],
  },
  {
    name: "Apple VR headset",
    description:
      "The Apple Vision Pro headset features micro-OLED displays offering over 4K resolution per eye and an external EyeSight display to indicate usage mode. It includes custom prescription Zeiss Optical Inserts for glasses wearers, a built-in camera for 3D photos and videos, and the ability to showcase existing media in a large scale for immersive viewing. Running on the visionOS operating system, it has a dedicated App Store and can run iPhone and iPad apps, while also serving as a display for a Mac and supporting Bluetooth accessories for input and control.",
    images: [
      require("./images/Apple-VR-headset1.png"),
      require("./images/Apple-VR-headset2.png"),
    ],
  },
  {
    name: "Meta Quest 3 headset",
    description:
      "The Meta Quest 3 Advanced VR Headset (128GB) offers a seamless blend of VR and AR through dual RGB cameras, enabling passthrough of real-world surroundings to insert virtual content. It features an enhanced XR2 Gen 2 Snapdragon processor, providing sharper VR graphics at 2064 x 2208 resolution per eye and 90Hz refresh rate. The Touch Plus controllers include TruTouch haptics for immersive interactions, and the headset is lighter and 40% slimmer than its predecessor, offering heightened comfort. It supports Wi-Fi 6E connectivity and offers a maximum battery life of 2.2 hours.",
    images: [
      require("./images/Meta-Quest-3-headset1.png"),
      require("./images/Meta-Quest-3-headset2.png"),
    ],
  },
  {
    name: "Meta Quest Pro headset",
    description:
      "The Meta Quest Pro offers a premium, comfortable design with mixed reality capabilities, including stereoscopic passthrough for natural 3D viewing. Its controllers feature Snapdragon processors for intuitive motion control and offer up to 10 hours of battery life. Enhanced optics, high-performance hardware, and backwards compatibility with the Meta Quest catalog are key features. Additionally, its flexible levels of VR immersion and enhanced audio experience provide a comprehensive and immersive VR experience.",
    images: [
      require("./images/Meta-Quest-Pro-headset1.png"),
      require("./images/Meta-Quest-Pro-headset2.png"),
    ],
  },
  {
    name: "Pico 4 VR headset",
    description:
      "The PICO 4 Enterprise VR headset features Omnidirectional SLAM and precise tracking with an infrared optical positioning system and improved sensors. With 6DoF haptic motion controllers and multiple cameras, it provides organic 360° movement. The headset's dual linear Super Speakers and 'Pancake' lens offer over 2K resolution and a wider 105° field of vision, while the RGB camera allows for a clear view of the environment without removing the headset.",
    images: [
      require("./images/Pico-4-VR-headset1.png"),
      require("./images/Pico-4-VR-headset2.png"),
    ],
  },
  {
    name: "Apara 5K VR headset",
    description:
      "The Apara 5K VR AIO headset offers a 95° field of view with a 5120 x 2560 px resolution and a 90 Hz OLED display for high color accuracy. Powered by Qualcomm Snapdragon XR2, it weighs 380 g and includes built-in microphones, IPD and lens-to-eye adjustments, and Wi-Fi connectivity for a comfortable and immersive VR experience.",
    images: [
      require("./images/Apara-5K-VR-headset1.png"),
      require("./images/Apara-5K-VR-headset2.png"),
    ],
  },
  {
    name: "Vive Focus 3 headset",
    description:
      'The VIVE Focus 3 Standalone Headset offers true wireless VR with dual 2.88" LCD screens, providing a total 4896 x 2448 resolution, 90 Hz refresh rate, and 120° field of view. Powered by Qualcomm Snapdragon XR2, it features 8GB of RAM, 128GB storage (expandable up to 2TB), and high-fidelity hand tracking. The headset includes swappable batteries, a balanced comfort design, and VIVE Business Streaming capability for various applications such as remote collaboration, training simulations, and education. For a natural fit, the headset includes the ergonomically designed VIVE Focus Controller with up to 15 hours of battery life.',
    images: [
      require("./images/Vive-Focus-3-headset1.png"),
      require("./images/Vive-Focus-3-headset2.png"),
    ],
  },
  {
    name: "Bigscreen Beyond VR headset",
    description:
      "The Big Screen Beyond VR headset offers a lightweight design at 155 grams with a high resolution of 2560x2560 pixels per eye. It requires a PC connection and external base stations for full tracking and is sold without controllers. The bespoke facial interface, based on a 3D scan of the buyer's face, ensures precise fitting, reduces light bleeding, and enhances comfort. The headset also features fixed IPD settings tailored to the user's IPD based on a 3D scan at the time of purchase and utilizes pancake lenses for a compact form factor.",
    images: [
      require("./images/Bigscreen-beyond-VR-headset1.png"),
      require("./images/Bigscreen-beyond-VR-headset2.png"),
    ],
  },
  {
    name: "Logitech Speaker add-on",
    description:
      "The CHORUS audio device is compatible with all three Meta Quest 2 strap options, providing ultra-realistic audio with off-ear acoustics for an immersive experience. Lightweight and comfortable, it features a flip-to-mute function and open-back audio drivers for a spacious sound stage. The quick and easy mute function activates when rotated up and out of the way, allowing for seamless transitions in and out of VR. The USB-C passthrough connection requires no battery, offering convenient and hassle-free use.",
    images: [
      require("./images/Logitech-Chorus-Speaker-add-on1.png"),
      require("./images/Logitech-Chorus-Speaker-add-on2.png"),
    ],
  },
];

const VRProductDetails = () => {
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
                      src={image}
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
