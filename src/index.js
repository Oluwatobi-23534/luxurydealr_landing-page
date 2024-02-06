import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Font from "../src/fonts/times-sans-serif.ttf"; // Add this line

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define your font face here
const fontFace = `
  @font-face {
    font-family: 'Times Sans Serif';
    src: local('Times Sans Serif'), url(${Font}) format('truetype');
    font-style: normal;
  }
`;

// Create a style element
const style = document.createElement("style");

// Add the font face to the style element
style.textContent = fontFace;

// Append the style element to the head of the document
document.head.append(style);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
