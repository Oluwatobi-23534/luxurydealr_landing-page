import React from "react";
import "../index.css";
import { HashLink } from "react-router-hash-link";

const categories = [
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Smartphones",
        items: [
          "Apple iPhone 13 Pro Max",
          "Samsung Galaxy Z Fold 3",
          "Google Pixel 6 Pro",
        ],
      },
      {
        name: "Laptops",
        items: [
          "Apple MacBook Pro (various models)",
          "Dell XPS series",
          "HP Spectre series",
        ],
      },
      {
        name: "Audio-Visual Equipment",
        items: [
          "Sony Bravia OLED TVs",
          "Bose home theater systems",
          "Bang & Olufsen speakers",
        ],
      },
      {
        name: "Smart Home Appliances",
        items: [
          "Dyson Air Purifiers",
          "Nest Hub Max",
          "Philips Hue smart lighting systems",
        ],
      },
    ],
  },
  {
    name: "Furniture",
    subcategories: [
      {
        name: "Sofas and Armchairs",
        items: [
          "Roche Bobois Mah Jong Sofa",
          "Eames Lounge Chair and Ottoman",
          "B&B Italia Harry Sofa",
        ],
      },
      {
        name: "Beds and Mattresses",
        items: [
          "Hastens Vividus Bed",
          "Tempur-Pedic mattresses",
          "Savoir Beds",
        ],
      },
      {
        name: "Dining Sets",
        items: [
          "Minotti Dining Table and Chairs",
          "Baccarat Crystal Glassware",
          "Christofle Flatware",
        ],
      },
      {
        name: "Hospitality and Hotels",
        items: [
          "Me & You Table and Chairs",
          "3-seat Airport chair",
          "4-seat marble dining set",
          // Add more items here...
        ],
      },
      {
        name: "Corporate Offices and Commercial Spaces",
        items: [
          "Single Office chair",
          "Conference chairs",
          "Office table",
          // Add more items here...
        ],
      },
      {
        name: "Healthcare and Medical Facilities",
        items: [
          "Office sofa set with center table",
          "Single Writing chair",
          "Single student chair and table",
          // Add more items here...
        ],
      },
      {
        name: "Education and Schools",
        items: [
          "Single Kitchen chair",
          "6-seater Dinning set with a plain design & marble table top & high-end leather chairs",
          "4-seater Dinning set with thick leather chairs and a marble top table",
          // Add more items here...
        ],
      },
      {
        name: "Retail and Commercial Spaces",
        items: [
          "Set of TV stand and table 1.5 meters",
          "3-seat Thick leather airport chair",
          "3-seater airport & reception waiting chair with steel frame",
          // Add more items here...
        ],
      },
      {
        name: "Restaurants and Food Service",
        items: [
          "4-seated wooden dining set with a plain design",
          "Luxury stool with Marble top",
          "Modern 3 in 1 PU leather visitors waiting chair",
          // Add more items here...
        ],
      },
      {
        name: "Residential and Home Furnishings",
        items: [
          "Sofa-like Studio bar stool",
          "Luxury stool and mini-sized center table with marble top",
          "Full marble-made Living room stools and a large center table",
          // Add more items here...
        ],
      },
      {
        name: "Event and Hospitality Services",
        items: [
          "3-seat Leather Airport Chair",
          "Luxury stool and mini-sized center table with marble top",
          // Add more items here...
        ],
      },
    ],
  },
  // Continue from the previous categories array...
  {
    name: "Automobile",
    subcategories: [
      {
        name: "Luxury Cars",
        items: [
          "Rolls-Royce Phantom",
          "Ferrari 812 Superfast",
          "Bentley Continental GT",
        ],
      },
      {
        name: "Sports Cars",
        items: [
          "Porsche 911 Turbo S",
          "Lamborghini Huracán EVO",
          "McLaren 720S",
        ],
      },
    ],
  },
  {
    name: "Clothing",
    subcategories: [
      {
        name: "Designer Clothing and Accessories",
        items: [
          "Gucci and Prada clothing lines",
          "Christian Louboutin footwear",
          "Hermès Birkin and Kelly bags",
        ],
      },
      {
        name: "Luxury Watches and Jewelry",
        items: [
          "Rolex, Patek Philippe, and Audemars Piguet timepieces",
          "Cartier and Tiffany & Co. jewelry",
        ],
      },
    ],
  },
  {
    name: "VR Products",
    subcategories: [
      {
        name: "Virtual Reality Headsets",
        items: [
          "Play station VR2 headset",
          "Meta Oculus Quest 2 headset",
          "Apple VR headset",
          "Meta Quest 3 headset",
          "Meta Quest Pro headset",
          "Pico 4 VR headset",
          "Apara 5K VR headset",
          "Vive Focus 3 headset",
          "Bigscreen Beyond VR headset",
          "Logitech Chorus Speaker add-on",
        ],
      },
    ],
  },
  {
    name: "Other Potential Products",
    subcategories: [
      {
        name: "Skincare and Beauty Products",
        items: ["La Mer skincare line", "Tom Ford beauty products"],
      },
      {
        name: "Kitchenware and Culinary Equipment",
        items: ["Miele kitchen appliances", "Le Creuset cookware"],
      },
      {
        name: "Travel Accessories and Luggage",
        items: ["Rimowa suitcases", "Louis Vuitton travel bags"],
      },
    ],
  },

  // Add more categories here...
];

const ProductList = () => {
  return (
    <div id="products-top" className="product-list w-full">
      {categories.map((category) => (
        <div key={category.name} className="category font-bold">
          <h1>
            <HashLink
              to={`/category/${category.name
                .toLowerCase()
                .replace(/ /g, "-")}#top`}
            >
              {category.name}
            </HashLink>
          </h1>
          {category.subcategories.map((subcategory) => (
            <div key={subcategory.name} className="subcategory">
              <h2>{subcategory.name}</h2>
              {subcategory.items.map((item) => (
                <div key={item} className="item">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
