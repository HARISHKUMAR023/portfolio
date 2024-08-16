import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-28 overflow-y-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
        {/* Mobile Application Development */}
        <div className="service-card service-card bg-white/30 text-red-500 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-200 hover:shadow-lg hover:shadow-red-500 ">
          <h3 className="text-xl font-semibold mb-2">Mobile Application Development</h3>
          <p className=''>Designing and developing high-performance, innovative apps for both iOS and Android platforms, tailored to meet your business needs.</p>
        </div>
        
        {/* Web Application Development */}
        <div className="service-card service-card bg-white/30 text-red-500 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-200 hover:shadow-lg hover:shadow-red-500">
          <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
          <p>Creating responsive, scalable web applications that offer seamless user experiences, using the latest technologies and frameworks.</p>
        </div>
        
        {/* API Integration and Development */}
        <div className="service-card service-card bg-white/30 text-red-500 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-200 hover:shadow-lg hover:shadow-red-500">
          <h3 className="text-xl font-semibold mb-2">API Integration and Development</h3>
          <p>Developing and integrating custom APIs to connect your applications, services, and data seamlessly, enhancing functionality and user experience.</p>
        </div>
        
        {/* Cybersecurity Solutions */}
        <div className="service-card service-card bg-white/30 text-red-500 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-200 hover:shadow-lg hover:shadow-red-500">
          <h3 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h3>
          <p>Implementing robust security measures to protect your applications and data from cyber threats, ensuring data integrity and compliance.</p>
        </div>

        <div className="service-card bg-white/30 text-red-500 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-200 hover:shadow-lg hover:shadow-red-500">
  <h3 className="text-xl font-semibold mb-2">Native Mobile Application Development</h3>
  <p>Building high-performance, feature-rich applications for Android and iOS using native development tools and languages for the best user experience.</p>
</div>

      </div>
    </div>
  );
}

export default Services;