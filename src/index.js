import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Font from '../src/fonts/times-sans-serif.ttf'; // Add this line
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = process.env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define your font face here
const fontFace = `
  @font-face {
    font-family: 'Times Sans Serif';
    src: local('Times Sans Serif'), url(${Font}) format('truetype');
    font-style: normal;
  }
`;

// Create a style element
const style = document.createElement('style');

// Add the font face to the style element
style.textContent = fontFace;

// Append the style element to the head of the document
document.head.append(style);

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);



// Use the styles in your component
