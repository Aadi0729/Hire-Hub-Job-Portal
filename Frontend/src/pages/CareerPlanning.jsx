import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <Link to="/career-advice" className="hover:underline">Career Advice</Link> &gt; Career Planning
    </nav>
  );
};

const CareerPlanning = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100 min-h-screen py-10"
    >
      <div className="container mx-auto px-4">
        <Breadcrumb />
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Career Planning</h1>
          <p className="text-lg text-gray-600">
            Discover how to effectively plan and advance your career. Learn strategies to set and achieve your career goals.
          </p>
        </header>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Understanding Career Planning</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Career planning is a continuous process that involves setting career goals, identifying your strengths and weaknesses, and creating a roadmap to achieve your professional aspirations. It helps you stay focused and motivated throughout your career journey.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Begin by assessing your interests, values, and skills. Understand what motivates you and what kind of work environments you thrive in. This self-awareness will guide you in setting realistic and achievable career goals.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            Create a career plan that outlines your short-term and long-term goals. Include specific milestones and deadlines. Regularly review and update your plan to adapt to changes in your interests, skills, or market conditions.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Steps for Effective Career Planning</h2>
          <ul className="list-disc list-inside text-gray-700 leading-7 space-y-4">
            <li>
              <strong>Self-Assessment:</strong> Reflect on your skills, interests, values, and personality traits to understand your career preferences.
            </li>
            <li>
              <strong>Set Clear Goals:</strong> Define specific, measurable, achievable, relevant, and time-bound (SMART) goals.
            </li>
            <li>
              <strong>Research:</strong> Explore potential career paths, industries, and roles that align with your goals and interests.
            </li>
            <li>
              <strong>Create a Plan:</strong> Develop a step-by-step plan that includes necessary education, certifications, and experience.
            </li>
            <li>
              <strong>Seek Mentorship:</strong> Connect with professionals in your desired field for guidance and advice.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Stay updated with industry trends and continue developing your skills.
            </li>
            <li>
              <strong>Review and Adjust:</strong> Regularly review your progress and adjust your plan as needed.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Resources for Career Planning</h2>
          <p className="text-gray-700 leading-7 mb-4">
            To support your career planning efforts, consider utilizing various resources such as career assessment tools, professional development courses, and industry-specific publications.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-7 space-y-4">
            <li>
              <a href="https://www.careerassessmentsite.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Career Assessment Tools
              </a>: Evaluate your skills, interests, and personality to gain insights into suitable career paths.
            </li>
            <li>
              <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Online Courses
              </a>: Enhance your skills and knowledge with courses relevant to your career goals.
            </li>
            <li>
              <a href="https://www.forbes.com/careers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Career Publications
              </a>: Stay informed about industry trends and job market developments.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerPlanning;
