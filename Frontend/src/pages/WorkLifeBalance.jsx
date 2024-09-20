import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumb = ({ currentPage }) => (
  <nav className="text-sm mb-6">
    <ol className="list-reset flex text-blue-600">
      <li>
        <Link to="/" className="hover:underline">Home</Link>
      </li>
      <li className="mx-2">/</li>
      <li>
        <Link to="/career-advice" className="hover:underline">Career Advice</Link>
      </li>
      <li className="mx-2">/</li>
      <li className="text-gray-500">{currentPage}</li>
    </ol>
  </nav>
);

const WorkLifeBalance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100 min-h-screen py-10"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <Breadcrumb currentPage="Work-Life Balance" />

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-lg p-8 mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Work-Life Balance</h1>
          <p className="text-gray-600 mb-6">
            Achieving a healthy work-life balance is crucial for maintaining overall well-being and productivity. It involves managing your work responsibilities while also dedicating time to personal interests and relationships. Here, we provide comprehensive strategies and tips to help you effectively balance your professional and personal life.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Strategies for Work-Life Balance</h2>
          <p className="text-gray-600 mb-4">
            <strong>1. Set Clear Boundaries:</strong> Define specific work hours and stick to them. Avoid checking work emails or taking calls outside of these hours.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>2. Prioritize Tasks:</strong> Use task management tools to prioritize your work. Focus on high-impact tasks and delegate or defer less important ones.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>3. Take Regular Breaks:</strong> Short breaks throughout the day can boost productivity and prevent burnout. Make time for brief walks or relaxation exercises.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>4. Maintain a Healthy Lifestyle:</strong> Regular exercise, a balanced diet, and adequate sleep contribute to better stress management and overall well-being.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>5. Seek Support:</strong> Don’t hesitate to ask for help from supervisors or colleagues if you’re feeling overwhelmed. Open communication can lead to better support and understanding.
          </p>

          {/* Additional Resources */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resource 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Managing Stress</h2>
              <p className="text-gray-600 mb-4">
                Explore various techniques to manage stress effectively and maintain a positive mindset in both work and personal life.
              </p>
              <Link to="/career-advice/stress-management" className="mt-4 inline-block text-blue-600 hover:underline">
                Read More
              </Link>
            </div>

            {/* Resource 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Time Management</h2>
              <p className="text-gray-600 mb-4">
                Learn effective time management strategies to optimize productivity and create more time for personal activities.
              </p>
              <Link to="/career-advice/time-management" className="mt-4 inline-block text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Need Personalized Guidance?</h2>
            <p className="text-gray-600 mt-4">Connect with our career coaches for tailored advice and support to help you achieve a better work-life balance.</p>
            <Link to="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkLifeBalance;
