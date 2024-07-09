import React from 'react';
import Head from 'next/head';

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <Head>
        <title>Harish Kumar Narasimhan - Work Experience</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-500">Project Highlights</h1>
        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-red-500 transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-center border-b-2 border-red-500 pb-2">Highlighted Projects</h2>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li><strong>80+ GitHub project repositories</strong></li>
              <li>30+ static sites using HTML, CSS, JavaScript, jQuery, AJAX, Bootstrap, TailwindCSS, Next.js, React.js, MUI, SASS, and Bootstrap</li>
              <li>20+ full stack projects using MERN stack, Redux, and Django</li>
              <li>3+ CLI applications, 1+ desktop application, and 3+ mobile applications using React Native</li>
              <li>3+ React APIs</li>
              <li>Medium-scale projects such as a medical CRM, Docker, purchase and stock e-billing, role management, education management systems, SMS management, employee and student attendance, and admission management systems</li>
            </ul>
            <div className="text-center mt-8">
              <a
                href="https://github.com/HARISHKUMAR023?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                View My Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
