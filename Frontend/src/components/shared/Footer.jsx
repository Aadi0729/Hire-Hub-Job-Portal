import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-32 text-center md:text-left">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Hire Hub</h2>
          <p className="text-sm leading-6">
            Your go-to platform for finding the best job opportunities across industries. We connect job seekers with top employers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="/categories" className="hover:underline">Job Categories</a></li>
            <li className="mb-2"><a href="/career-advice" className="hover:underline">Career Advice</a></li>
            <li className="mb-2"><a href="/faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm leading-6">
            Email: hirehubhelpdesk@gmail.com <br />
            Phone: +91 9644345296
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://x.com/HireHub2024" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-pateriya7781/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/adityapateriya.official/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://join.skype.com/invite/qDgwqQKHDiXE" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        &copy; Aditya Pateriya 2024 Hire Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
