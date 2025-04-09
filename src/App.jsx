import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/ShopPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import MensFashionPage from "./pages/MensFashionPage";
import WomensFashionPage from "./pages/WomensFashionPage";
import KidsFashionPage from "./pages/ElectronicsGadgetsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />

      <main className="mt-20 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop/men" element={<MensFashionPage />} />
          <Route path="/shop/women" element={<WomensFashionPage />} />
          <Route path="/shop/electronics" element={<KidsFashionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </main>

      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;

