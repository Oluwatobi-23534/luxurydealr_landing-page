import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { HashLink } from "react-router-hash-link";

const ProductList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/categories"
        );
        setCategories(response.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCategories();
  }, []);


  // Scroll to the "products-top" element when the component is mounted
  useEffect(() => {
    const element = document.getElementById("products-top");
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div id="products-top" className="product-list w-full">
      {categories.map((category) => (
        <div key={category.name} className="category font-bold">
          <h1>{category.name}</h1>
          {category.subcategories.map((subcategory) => (
            <div key={subcategory.name} className="subcategory">
              <h2>
                <HashLink
                  to={`/category/${category.name
                    .toLowerCase()
                    .replace(/ /g, "-")}/${subcategory.name
                    .toLowerCase()
                    .replace(/ /g, "-")}#top`}
                >
                  {subcategory.name}
                </HashLink>
              </h2>
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
