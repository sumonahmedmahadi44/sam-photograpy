import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ heading, subHeading, image }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg my-7">
      <div className="border-4 border-purple-700 rounded-lg p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center bg-white rounded-lg overflow-hidden mb-4"
        >
          <img src={image} alt="Section Image" className="w-24 h-24" />
        </motion.div>
        <h1 className="text-5xl font-bold text-center underline py-2 text-white mb-2">{heading}</h1>
        <p className="text-xl border border-black md:w-2/5 mx-auto p-4 bg-black  text-center  text-purple-200">{subHeading}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
