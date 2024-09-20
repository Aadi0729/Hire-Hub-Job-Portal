import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const JobCategoriesPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 py-16 min-h-screen"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-50 opacity-30 rounded-lg -z-10"></div>

                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="absolute top-4 left-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                    >
                        &larr; Back
                    </button>

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Job Categories</h1>
                    <p className="text-gray-600 mb-8">Explore various job categories and find the role that fits you best!</p>

                    <div className="space-y-6">
                        {/* Category Item 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h2>
                            <p className="text-gray-600">
                                Includes roles such as Software Engineer, Web Developer, and Mobile App Developer. Ideal for those with a strong background in coding and software design.
                            </p>
                        </div>

                        {/* Category Item 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Science</h2>
                            <p className="text-gray-600">
                                Roles such as Data Analyst, Data Scientist, and Machine Learning Engineer. Perfect for those who enjoy working with data, statistical analysis, and machine learning.
                            </p>
                        </div>

                        {/* Category Item 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Design</h2>
                            <p className="text-gray-600">
                                Covers positions like Graphic Designer, UX/UI Designer, and Product Designer. Suited for individuals with a flair for creativity and visual design.
                            </p>
                        </div>

                        {/* Category Item 4 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Marketing</h2>
                            <p className="text-gray-600">
                                Includes roles such as Marketing Manager, Social Media Specialist, and SEO Expert. Great for those interested in market analysis, promotion strategies, and branding.
                            </p>
                        </div>

                        {/* Category Item 5 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Finance</h2>
                            <p className="text-gray-600">
                                Positions such as Financial Analyst, Accountant, and Investment Banker. Ideal for individuals with strong analytical skills and interest in financial management.
                            </p>
                        </div>

                        {/* Category Item 6 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Human Resources</h2>
                            <p className="text-gray-600">
                                Covers HR roles like HR Manager, Recruiter, and Talent Acquisition Specialist. Perfect for those who excel in interpersonal skills and organizational management.
                            </p>
                        </div>

                        {/* Category Item 7 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h2>
                            <p className="text-gray-600">
                                Includes positions such as Customer Service Representative, Support Specialist, and Technical Support. Suited for individuals with strong communication and problem-solving skills.
                            </p>
                        </div>

                        {/* Category Item 8 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Sales</h2>
                            <p className="text-gray-600">
                                Roles such as Sales Manager, Account Executive, and Sales Representative. Ideal for those with strong persuasion skills and a passion for meeting sales targets.
                            </p>
                        </div>

                        {/* Category Item 9 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Operations</h2>
                            <p className="text-gray-600">
                                Includes roles like Operations Manager, Logistics Coordinator, and Supply Chain Analyst. Perfect for those interested in streamlining processes and managing operations.
                            </p>
                        </div>

                        {/* Category Item 10 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Engineering</h2>
                            <p className="text-gray-600">
                                Covers various engineering disciplines, including Mechanical Engineer, Electrical Engineer, and Civil Engineer. Ideal for those with a strong technical background in engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCategoriesPage;
