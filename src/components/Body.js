import React, { useState, useEffect } from 'react';
import Header from './Header';
import BelowBody from './BelowBody';
import { motion } from 'framer-motion';

const Body = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const profileImage = require('../images/profile_img.jpeg');

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center justify-start overflow-hidden px-4 mt-6">

      <motion.div 
        className="container mx-auto px-4 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-medium text-gray-200 italic mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ritik Pandey
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center mt-8">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p className={`text-sm md:text-lg text-gray-100 mb-4 italic transition-opacity duration-500 ease-in-out ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
              With a remarkable blend of powerful vocals and masterful guitar skills, Ritik is a true performer. 
              Their voice, rich in emotion and versatility, captivates audiences across all genres. 
              Whether it’s an intimate acoustic session or a high-energy live performance, 
              Ritik effortlessly connects with their listeners, bringing raw passion and authenticity to every note. 
              Known for their dynamic stage presence, they thrive in the spotlight, delivering unforgettable public performances. 
              From jamming with fellow musicians to commanding the stage with their captivating presence, 
              Ritik is a force to be reckoned with in the world of live music.
            </p>
          </motion.div>

          <motion.img 
            src={profileImage} 
            alt="Ritik Pandey" 
            className="w-1/2 md:w-1/4 rounded-full mt-8 md:mt-0 md:ml-8 shadow-lg md:self-start"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>
      </motion.div>

      <BelowBody />
    </div>
  );
};

export default Body;
