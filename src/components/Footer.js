import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://www.facebook.com/rritik.pandey.3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-3xl hover:text-blue-500 transition duration-300"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-3xl hover:text-blue-400 transition duration-300"></i>
          </a>
          <a href="https://www.instagram.com/_musical_ritik__28?igsh=dDU2ZDJmYjRyMjJi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-3xl hover:text-pink-500 transition duration-300"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-lg mb-4">
          <p>Email: <a href="mailto:example@example.com" className="text-blue-400 hover:underline">ritikpandey195@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+91-9219006949</a></p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-4">
          &copy; 2025 Musical Ritik. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
