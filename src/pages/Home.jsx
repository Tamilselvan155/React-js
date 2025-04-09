import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const categories = [
  {
    title: "Men Fashion",
    description: "Shop the latest trends in men's fashion. Suits, and more!",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
    link: "/shop/men",
  },
  {
    title: "Women Fashion",
    description: "Beautiful outfits, accessories, and must-have looks for women.",
    image:
      "https://img.freepik.com/free-photo/two-young-beautiful-smiling-hipster-female-trendy-white-sweater-coat_158538-16931.jpg",
    link: "/shop/women",
  },
  {
    title: "Electronic Devices",
    description: "From smartphones and laptops to smartwatches and audio gear – we’ve got everything you need to stay connected.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    link: "/shop/electronics",
  }
  
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Astril</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover the best products at unbeatable prices. Shop now and enjoy amazing deals!
          </p>
<br />
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Offer Products
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Shopping"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        
      </section>

      {/* Featured Categories Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  to={category.link}
                  className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

