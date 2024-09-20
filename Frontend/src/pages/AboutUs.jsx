import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Back Button - Placed at the top of the content and scrolls with the page */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-6 py-2 bg-[#232324] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e2e30] transition-colors duration-300"
          >
            ← Go Back
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg -z-10"></div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Welcome to Hire Hub! 🌟
          </h1>
          <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
            At Hire Hub, we believe that finding the right job or the perfect candidate shouldn’t be a daunting task. Our mission is to streamline the hiring process and bridge the gap between ambitious professionals and innovative companies.
          </p>

          {/* What We Do */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <p className="text-gray-600 mb-4">
              Hire Hub is a cutting-edge job portal designed with both job seekers and employers in mind. Our platform offers a seamless experience for job hunting, recruitment, and career management. From intuitive job searches and personalized recommendations to efficient candidate tracking and employer branding, we cover it all.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              We envision a world where every job seeker can find their dream job effortlessly and every employer can discover top-tier talent with ease. By leveraging the latest technology and a user-centric approach, we are committed to making the job market more dynamic and accessible.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>User-Friendly Interface: Navigate our platform effortlessly with a clean, intuitive design.</li>
              <li>Advanced Search Features: Find the perfect job or candidate with powerful search and filter options.</li>
              <li>Personalized Experience: Receive tailored job recommendations and recruitment solutions based on your preferences.</li>
              <li>Innovative Solutions: Benefit from our state-of-the-art tools designed to enhance your hiring and job search experience.</li>
            </ul>
          </section>

          {/* Join Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
            <p className="text-gray-600 mb-4">
              Whether you’re looking to take the next step in your career or seeking top talent to drive your business forward, Hire Hub is here to help. Explore our platform and discover how we can make your job search or recruitment process smoother and more effective.
            </p>
            <p className="text-gray-600">
              Thank you for choosing Hire Hub. Together, let’s build a brighter future for work! 🚀
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
