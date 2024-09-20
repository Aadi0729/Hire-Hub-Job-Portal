import React from 'react';
import { Link } from 'react-router-dom';

const CareerAdvicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Career Advice</h1>
          <p className="text-lg text-gray-600">
            Empower your career journey with expert advice and insights. Whether you're a recent graduate or an experienced professional, we’ve got something for everyone!
          </p>
        </header>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Career Planning */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Planning</h2>
            <p className="text-gray-600">
              Learn how to set career goals, identify your strengths, and map out a plan to reach your professional dreams.
            </p>
            <Link to="/career-advice/career-planning" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>

          {/* Resume Writing */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resume Writing</h2>
            <p className="text-gray-600">
              Craft a standout resume that captures attention. Learn tips on how to format your resume and present your experience to potential employers.
            </p>
            <Link to="/career-advice/resume-writing" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>

          {/* Job Interview Tips */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Interview Tips</h2>
            <p className="text-gray-600">
              Ace your job interviews with confidence! Get tips on answering tough questions, body language, and how to make a great first impression.
            </p>
            <Link to="/career-advice/job-interview-tips" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        </div>
        {/* Secondary Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Networking */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Networking</h2>
            <p className="text-gray-600">
              Build strong connections that can help grow your career. Learn how to network both online and offline, and discover tips to engage with industry leaders and peers.
            </p>
            <Link to="/career-advice/networking" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>

          {/* Work-Life Balance */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work-Life Balance</h2>
            <p className="text-gray-600">
              Discover strategies to manage your work-life balance effectively. Learn about stress management, maintaining productivity, and creating a healthy work environment.
            </p>
            <Link to="/career-advice/Work-Life Balance" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800">Need Personalized Career Advice?</h2>
          <p className="text-gray-600 mt-4">Connect with our expert career coaches to help you navigate your career path.</p>
          <Link to="/career-advice/CalltoAction" className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePage;
