import React from 'react';

const Services = () => {
  const newServices = [
    {
      title: "Heat Audit Analysis",
      description: "Determine how much you can save with hashrate-heating, and see what we recommend."
    },
    {
      title: "Hashrate Heating System Upgrades",
      description: "Get a complete heating system design and quote for your use case."
    },
    {
      title: "Hashrate Heater Health Monitoring",
      description: "Never experience a broken heater again. We’ll monitor and maintain."
    },
    {
      title: "Hashrate Heat Consulting",
      description: "Tap into our expertise for all things hashrate-heating."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 py-16"> {/* This blue will now be #2F3B69 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-3xl mx-auto">
            EXERGY offers a suite of services to help you integrate hashrate-based heating solutions efficiently and effectively. Discover how we can assist you.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20"> {/* Changed max-w-7xl to container for consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Increased gap */}
          {newServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Placeholder for an icon if you decide to add one later */}
              {/* <div className="p-4 bg-blue-100 rounded-full mb-4">
                <PlaceholderIcon className="h-10 w-10 text-blue-600" />
              </div> */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* You can add a CTA or other sections below if needed */}
      {/* Example CTA:
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8">Contact us today for a consultation and find out how EXERGY can revolutionize your heating solutions.</p>
          <a
            href="/contact"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      */}
    </div>
  );
};

// Example of a placeholder icon component if you were to add icons
// const PlaceholderIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//   </svg>
// );

export default Services;
