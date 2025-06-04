import React from 'react'
import { Users, Cpu, Award } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]

  const technologies = [
    'React', 'Node.js', 'Python', 'TypeScript',
    'AWS', 'Docker', 'Kubernetes', 'MongoDB',
    'GraphQL', 'TensorFlow', 'Flutter', 'PostgreSQL'
  ]

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-2xl mx-auto">
            We're a team of passionate technologists dedicated to helping businesses succeed in the digital age.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Expert Team</h3>
            <p className="mt-2 text-gray-600">
              Our team brings years of experience in delivering innovative solutions.
            </p>
          </div>
          <div className="text-center">
            <Cpu className="h-12 w-12 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Cutting-edge Tech</h3>
            <p className="mt-2 text-gray-600">
              We use the latest technologies to build scalable solutions.
            </p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Proven Success</h3>
            <p className="mt-2 text-gray-600">
              Track record of delivering successful projects for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About