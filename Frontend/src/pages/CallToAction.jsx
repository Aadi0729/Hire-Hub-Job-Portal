import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-16"
    >
      <div className="container mx-auto px-4 md:px-8">

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg -z-10"></div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Ready to Elevate Your Career?
          </h1>
          <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
            Discover how our expert career coaches and extensive resources can help you achieve your professional goals. From personalized advice to valuable tools and opportunities, we are committed to supporting your career journey every step of the way.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            {/* <Link
              to="/resources"
              className="inline-block px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Resources
            </Link> */}
          </div>
          
          {/* Additional Content */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">
              Our platform offers tailored career solutions, expert guidance, and a wealth of resources to help you navigate your career path successfully.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
