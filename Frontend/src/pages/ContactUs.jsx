import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sending the form data via EmailJS
        emailjs
            .send(
                'service_b4s88xs', // Email service ID from EmailJS
                'template_v4v2294', // Template ID from EmailJS
                formData,
                'oIJb6ndrJaWXa22am' // User ID from EmailJS
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormStatus('Your message has been sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    // Hide the message after 3 seconds
                    setTimeout(() => {
                        setFormStatus('');
                    }, 3000);
                },
                (err) => {
                    console.error('FAILED...', err);
                    setFormStatus('Oops! Something went wrong. Please try again.');

                    // Hide the message after 3 seconds
                    setTimeout(() => {
                        setFormStatus('');
                    }, 3000);
                }
            );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-16 min-h-screen"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg -z-10"></div>

                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="absolute top-4 left-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                    >
                        &larr; Back
                    </button>

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-gray-600 mb-8">We would love to hear from you. Fill out the form below to get in touch!</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-32 px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Form Status */}
                    {formStatus && (
                        <p className="text-green-600 font-semibold mt-4">{formStatus}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;
