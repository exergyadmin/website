import React from 'react'
import { Link } from 'react-router-dom'
import { Laptop, Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Laptop className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TechStart</span>
            </div>
            <p className="mt-4 text-gray-400">
              Upgrade to heat that pays.
            </p>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

                    {/* Learn Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/calculators" className="text-gray-400 hover:text-white">Calculators</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-400 hover:text-white">Education</Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-400 hover:text-white">Forum</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechStart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer