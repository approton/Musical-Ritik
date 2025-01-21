import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Import Footer here

const ContactPage = () => {
  const profileImage = require('../images/contact-img2.jpeg')
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="contact" className="flex-1 flex flex-col justify-center items-center py-20 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl">Feel free to reach out for inquiries or booking!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12">
          {/* Singer's Image */}
          <div className="mb-6 md:mb-0">
            <img
              src={profileImage}
              alt="Singer"
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-500 h-48 w-48 object-cover"
            />
          </div>

          {/* Contact Information */}
          <div className="text-lg md:text-xl">
            <p className="mb-6">Email: <a href="mailto:example@example.com" className="text-blue-400 hover:underline transition">ritikpandey195@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline transition">+91-9219006949</a></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
