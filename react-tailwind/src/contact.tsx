import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left Side - Contact Information */}
        <div className="bg-gradient-to-br from-green-700 to-green-700 text-white p-8 md:w-1/2 rounded-l-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-6">
            This statement reflects a dedication to customer satisfaction and a
            commitment to delivering outstanding service and support.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 9V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2v-4m4 0h-4m0 0a2 2 0 100-4m0 4a2 2 0 110-4m-4-2h4v.01M8 11h4m-4 4h4m-4 4h4"
                />
              </svg>
              <span>Bogor, Indonesia</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l1.664 7.193A2 2 0 006.607 18h10.787a2 2 0 001.943-1.807L21 10m-9-4v4m0 0l-2 2m2-2h8m0 0V6.208A2 2 0 0018 4H6.8A2 2 0 004 6v1m8 5v4"
                />
              </svg>
              <span>0881-0259-43417</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0h.01M16 8H8m8 8H8m0 0h.01M16 12H8m0 0h.01"
                />
              </svg>
              <span>ahady1105@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description *
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-md shadow-lg hover:bg-black transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
