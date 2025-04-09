import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Contact Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-8">
        Have questions? We'd love to hear from you!
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-8 text-center ">
        <p className="text-black"><i class="fa-solid fa-thumbtack"></i>  123 Astril Street, New York, USA</p>
        <p className="text-black"><i class="fa-solid fa-envelope"></i>  Support@astril.com</p>
        <p className="text-black"><i class="fa-solid fa-phone"></i>  +1 234 567 890</p>
      </div>
    </div>
  );
};

export default Contact;
