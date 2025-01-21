import React from "react";
import { motion } from "framer-motion";
import "../custom_css/About.css";

const About = () => {
  return (
    <div className="about-container bg-gray-800 text-white min-h-screen flex flex-col justify-start items-center px-6 md:px-12 pt-20 pb-12">
    
      <motion.h1
        className="text-center text-4xl font-extrabold mb-6 uppercase tracking-wide bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent font-heading mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Ritik
      </motion.h1>

      <div className="max-w-5xl w-full space-y-6">
        
        <motion.div
          className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-500 cursor-pointer"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-heading mb-2 flex items-center">🌍 Place of Birth</h2>
          <p className="text-lg font-body">Vill- Pipraich, Dhanauti Khurd, Rampur Karkhana, Deoria</p>
        </motion.div>

      
        <motion.div
          className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-500 cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-heading mb-2 flex items-center">📚 Academics</h2>
          <ul className="text-lg space-y-2 font-body">
            {[
              "10th - Saraswati Sr. Secondary Vidya Mandir, Deoria",
              "12th - Saraswati Sr. Secondary Vidya Mandir, Deoria",
              "Graduation - Bachelor of Arts in Vocal from Bhatkhande Deemed University, Lucknow",
              "Post Graduation - Masters of Arts in Vocal & Classical Singing from Bhatkhande Deemed University, Lucknow",
            ].map((edu, index) => (
              <motion.li
                key={index}
                className="bg-gray-600 px-4 py-2 rounded-md shadow-sm cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {edu}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-500 flex justify-between items-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-heading flex items-center">📍 Current Location</h2>
          <p className="text-lg font-bold bg-gray-900 px-3 py-1 rounded-md">Lucknow</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
