import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Networking = () => {
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
                        <li className="font-semibold text-gray-800">Networking</li>
                    </ul>
                </nav>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Effective Networking Strategies</h1>
                    <p className="text-lg text-gray-600">
                        Build meaningful connections and expand your professional network with these proven networking strategies.
                    </p>
                </header>

                {/* Main Content */}
                <section className="bg-white shadow-md rounded-lg p-8 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">1. Building Your Online Presence</h2>
                    <p className="text-gray-700 leading-7 mb-4">
                        A strong online presence is crucial for networking in today’s digital world. Here’s how you can build and enhance your online profile:
                    </p>
                    <ul className="list-disc list-inside pl-6 mb-4">
                        <li><strong>Optimize Your LinkedIn Profile:</strong> Make sure your profile is up-to-date with a professional photo, detailed experience, and a compelling summary.</li>
                        <li><strong>Engage in Professional Groups:</strong> Join and participate in LinkedIn groups related to your industry to connect with like-minded professionals.</li>
                        <li><strong>Create and Share Valuable Content:</strong> Share articles, insights, and updates relevant to your field to showcase your expertise and engage with your network.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-md rounded-lg p-8 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">2. Networking Events and Conferences</h2>
                    <p className="text-gray-700 leading-7 mb-4">
                        Attending networking events and conferences is a great way to meet people in your industry and expand your professional circle. Consider these tips for making the most out of these events:
                    </p>
                    <ul className="list-disc list-inside pl-6 mb-4">
                        <li><strong>Prepare Your Elevator Pitch:</strong> Have a concise and engaging introduction ready to effectively communicate who you are and what you do.</li>
                        <li><strong>Follow Up:</strong> After meeting someone, send a follow-up message or email to reinforce the connection and express your interest in staying in touch.</li>
                        <li><strong>Be Genuine:</strong> Approach conversations with a genuine interest in others and their work, rather than just focusing on what you can gain from the interaction.</li>
                    </ul>
                </section>

                <section className="bg-white shadow-md rounded-lg p-8 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">3. Leveraging Existing Relationships</h2>
                    <p className="text-gray-700 leading-7 mb-4">
                        Utilize your existing relationships to expand your network. Here’s how:
                    </p>
                    <ul className="list-disc list-inside pl-6 mb-4">
                        <li><strong>Ask for Introductions:</strong> Reach out to friends, family, or colleagues and ask if they can introduce you to people in their network who might be relevant to your career goals.</li>
                        <li><strong>Stay in Touch:</strong> Regularly check in with your contacts and update them on your career progress. This helps keep the relationship active and mutually beneficial.</li>
                        <li><strong>Offer Value:</strong> Provide assistance or share valuable resources with your network to build goodwill and strengthen your professional relationships.</li>
                    </ul>
                </section>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-800">Ready to Expand Your Network?</h2>
                    <p className="text-gray-600 mt-4">Connect with industry professionals and enhance your career opportunities through effective networking.</p>
                    <Link to="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Networking;
