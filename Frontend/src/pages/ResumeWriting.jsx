import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResumeWriting = () => {
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
            <li className="font-semibold text-gray-800">Resume Writing Tips</li>
          </ul>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume Writing Tips</h1>
          <p className="text-lg text-gray-600">
            Craft a standout resume that captures attention. Learn how to effectively present your skills, experience, and achievements to potential employers.
          </p>
        </header>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">1. Understanding Resume Basics</h2>
          <p className="text-gray-700 leading-7 mb-4">
            A resume is a summary of your work experience, skills, and education. It’s often the first impression you make on a potential employer. Here are the key sections you should include:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><strong>Contact Information:</strong> Include your full name, phone number, email address, and LinkedIn profile.</li>
            <li><strong>Summary or Objective:</strong> A brief section summarizing your career goals and what you bring to the table.</li>
            <li><strong>Experience:</strong> Detail your previous jobs, including your role, responsibilities, and achievements.</li>
            <li><strong>Education:</strong> List your educational background, including degrees and certifications.</li>
            <li><strong>Skills:</strong> Highlight relevant skills and competencies.</li>
            <li><strong>Additional Sections:</strong> Include any other relevant sections such as awards, publications, or volunteer experience.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">2. Crafting an Effective Resume</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Here’s how to make each section of your resume stand out:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Writing a Compelling Summary</h3>
          <p className="text-gray-700 leading-7 mb-4">
            Your summary should be a concise statement of your professional background and career goals. Use this section to highlight your unique selling points and make a strong first impression.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Detailing Your Experience</h3>
          <p className="text-gray-700 leading-7 mb-4">
            Use bullet points to describe your job responsibilities and achievements. Focus on quantifiable results, such as "Increased sales by 20% over 6 months" rather than generic statements.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Showcasing Your Skills</h3>
          <p className="text-gray-700 leading-7 mb-4">
            List skills that are relevant to the job you're applying for. Include both hard skills (e.g., software proficiency) and soft skills (e.g., communication, leadership).
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">3. Formatting and Design Tips</h2>
          <p className="text-gray-700 leading-7 mb-4">
            A well-formatted resume makes it easier for hiring managers to read and find the information they need. Follow these tips:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><strong>Keep It Clean and Professional:</strong> Use a clean layout with ample white space and a professional font.</li>
            <li><strong>Use Bullet Points:</strong> Bullet points make your resume easier to scan.</li>
            <li><strong>Be Consistent:</strong> Ensure consistent formatting throughout the document.</li>
            <li><strong>Limit Length:</strong> Aim for a one-page resume, or two pages if you have extensive experience.</li>
            <li><strong>Proofread:</strong> Check for spelling and grammar errors before submitting.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">4. Resources for Resume Building</h2>
          <p className="text-gray-700 leading-7 mb-4">
            Here are some resources to help you build and polish your resume:
          </p>
          <ul className="list-disc list-inside pl-6 mb-4">
            <li><a href="https://www.canva.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Canva</a> - Provides resume templates and design tools.</li>
            <li><a href="https://www.resume.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Resume.com</a> - Offers resume building tools and templates.</li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> - Useful for building your professional network and gathering insights on resume best practices.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default ResumeWriting;
