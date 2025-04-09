import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* About Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Astril</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl">
        Welcome to <span className="text-blue-600 font-semibold">Astril</span> – your one-stop online shopping destination.
        We provide high-quality products at unbeatable prices. Our goal is to create an amazing shopping experience for everyone.
      </p>

      {/* About Content Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Our Story */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2024, Astril started with a mission to make online shopping easy, affordable, and accessible for everyone.
            We believe in quality, customer satisfaction, and innovation.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            At Astril, we aim to bring you the best products with the best deals. We continuously improve our services to
            ensure a seamless shopping experience.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Astril?</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>✅ High-quality products at affordable prices</li>
            <li>✅ Fast and reliable shipping</li>
            <li>✅ 24/7 customer support</li>
            <li>✅ Secure and hassle-free shopping experience</li>
          </ul>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="mt-6">
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
