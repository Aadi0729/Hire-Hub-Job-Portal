import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FAQsPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 py-16 min-h-screen"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-50 opacity-30 rounded-lg -z-10"></div>

                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="absolute top-4 left-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                    >
                        &larr; Back
                    </button>

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Frequently Asked Questions</h1>
                    <p className="text-gray-600 mb-8">Here are some common questions and answers to help you out.</p>

                    <div className="space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">What is this website about?</h2>
                            <p className="text-gray-600">
                                This website provides information on various job opportunities, career resources, and helps you with your job search.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">How can I contact support?</h2>
                            <p className="text-gray-600">
                                You can contact support by filling out the contact form on the Contact Us page, or by emailing us at hirehubhelpdesk.com.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">How do I update my profile?</h2>
                            <p className="text-gray-600">
                                To update your profile, log in to your account and navigate to the Profile section where you can edit your details.
                            </p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">What should I do if I encounter a technical issue?</h2>
                            <p className="text-gray-600">
                            If you encounter a technical issue, try clearing your browser cache or restarting your browser. If the problem persists, please contact our support team for assistance.
                            </p>
                        </div>

                        {/* FAQ Item 5 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Do you offer any job placement services?</h2>
                            <p className="text-gray-600">
                            While we provide resources and job listings, we do not offer direct job placement services. However, we offer tools and guidance to help you in your job search.
                            </p>
                        </div>

                        {/* FAQ Item 6 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Are there any fees for using the website?</h2>
                            <p className="text-gray-600">
                            Our website offers free access to job listings and career resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FAQsPage;
