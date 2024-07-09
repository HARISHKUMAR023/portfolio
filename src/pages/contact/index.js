import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div className="max-h-screen bg-gray-900 text-white py-10 overflow-y-scroll">
      <Head>
        <title>Harish Kumar Narasimhan - Contact</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-500">Contact Me</h1>
        <p className="text-center text-lg mb-12">Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="space-y-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-red-500 transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-center border-b-2 border-red-500 pb-2">Contact Information</h2>
            <div className="text-lg space-y-4">
              <p><strong>Email:</strong> harishkumar023.com</p>
              <p><strong>Phone:</strong> +91 6369145671</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harishkumar023/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">My LinkedIn Harishkumar</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/HARISHKUMAR023/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">My GitHub Harishkumar</a></p>
              <p><strong>Address:</strong> Tamilnadu , India </p>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-red-500 transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-center border-b-2 border-red-500 pb-2">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
