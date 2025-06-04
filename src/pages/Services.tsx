import React from 'react'
import { Code, Database, Globe, LineChart, Shield, Smartphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and drive growth.'
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business value.'
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that optimize performance and reduce costs.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.'
    },
    {
      icon: <LineChart className="h-12 w-12 text-blue-600" />,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights to help you make data-driven business decisions.'
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Developing a strategic roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Building your solution</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">Deploying and maintaining your solution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services