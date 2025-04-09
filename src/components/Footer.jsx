import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Astril */}
          <div>
            <h2 className="text-xl font-semibold">About Astril</h2>
            <p className="text-gray-400 mt-2">
              Astril is your one-stop shop for high-quality products at the best prices.
              We are committed to providing a seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-blue-400 transition">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-gray-400 mt-2"><i class="fa-solid fa-thumbtack"></i>  123 Astril Street, New York, USA</p>
            <p className="text-gray-400"><i class="fa-solid fa-envelope"></i> support@astril.com</p>
            <p className="text-gray-400"><i class="fa-solid fa-phone"></i> +1 234 567 890 </p>
            
           
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6 ">
          <a href="#" className="text-white hover:text-blue-400 transition"><i class="fa-brands fa-facebook"></i> Facebook</a>
          <a href="#" className="text-white hover:text-blue-400 transition"> <i class="fa-brands fa-instagram"></i> Instagram</a>
          <a href="#" className="text-white hover:text-blue-400 transition"><i class="fa-brands fa-twitter"></i> Twitter</a>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-gray-500">© 2025 Astril. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
