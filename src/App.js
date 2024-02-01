import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import OrderDetails from "./components/OrderDetails";
import Home from "./components/Hero";
import VRProductDetails from "./pages/VRProductDetails";
import HomeElectronicsDetails from "./pages/HomeElectronicsDetails";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route
              path="/category/vr-products"
              element={<VRProductDetails />}
            />
            <Route
              path="/category/electronics"
              element={<HomeElectronicsDetails />}
            />
          </Routes>

          <Routes>
            <Route path="/order" element={<OrderDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
