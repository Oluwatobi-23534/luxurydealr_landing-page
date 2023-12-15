import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

import OrderDetails from "./components/OrderDetails";
import Home from "./components/Hero";
import VRProductDetails from "./pages/VRProductDetails";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/category/vr-products" element={<VRProductDetails />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
