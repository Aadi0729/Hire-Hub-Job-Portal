import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JobInterviewTips = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100 min-h-screen py-10"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <ul className="flex text-gray-600">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link to="/career-advice" className="hover:underline">Career Advice</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="font-semibold text-gray-800">Job Interview Tips</li>
          </ul>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Interview Tips</h1>
          <p className="text-lg text-gray-600">
            Ace your next job interview with these essential tips and strategies. From preparation to follow-up, we've got you covered.
          </p>
        </header>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">1. Preparing for the Interview</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Proper preparation is key to a successful interview. Here’s how to get ready:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><strong>Research the Company:</strong> Understand the company’s mission, values, and recent news.</li>
            <li><strong>Know the Job Description:</strong> Be clear about the role’s responsibilities and requirements.</li>
            <li><strong>Practice Common Interview Questions:</strong> Prepare answers for questions like "Tell me about yourself" and "Why do you want to work here?"</li>
            <li><strong>Prepare Your Questions:</strong> Have insightful questions ready for the interviewer about the company and role.</li>
            <li><strong>Plan Your Outfit:</strong> Choose professional attire that fits the company culture.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">2. During the Interview</h2>
          <p className="text-gray-700 leading-7 mb-4">
            How you conduct yourself during the interview can make a big impact. Here’s what to keep in mind:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">A. First Impressions Matter</h3>
          <p className="text-gray-700 leading-7 mb-4">
            Arrive on time, greet the interviewer with a firm handshake, and maintain good posture.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Communicate Effectively</h3>
          <p className="text-gray-700 leading-7 mb-4">
            Listen carefully to questions and respond thoughtfully. Be clear and concise in your answers.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Show Enthusiasm</h3>
          <p className="text-gray-700 leading-7 mb-4">
            Demonstrate your interest in the role and the company through your answers and body language.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">3. Post-Interview Actions</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Following up after the interview is crucial. Here’s how to make a lasting impression:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><strong>Send a Thank-You Email:</strong> Express your gratitude for the opportunity and reiterate your interest in the position.</li>
            <li><strong>Review Your Performance:</strong> Reflect on what went well and what could be improved for future interviews.</li>
            <li><strong>Follow Up:</strong> If you haven’t heard back within the timeframe mentioned, send a polite follow-up email.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">4. Additional Resources</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Explore these resources to further enhance your interview skills:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><a href="https://www.interviewing.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Interviewing.io</a> - Offers mock interviews and interview practice.</li>
            <li><a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Glassdoor</a> - Provides insights on company interview questions and reviews.</li>
            <li><a href="https://www.careerbuilder.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CareerBuilder</a> - Includes articles and tips on job interviews.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default JobInterviewTips;
