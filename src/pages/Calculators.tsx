import React from 'react'
import { Calculator, Clock, ArrowRight, Mail } from 'lucide-react'
import { MiningRevenueCalculator } from '../components/MiningRevenueCalculator'
import { Link } from 'react-router-dom'

const Calculators = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exergy Calculators
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The best hashrate heating tools that let you see the upside for yourself
          </p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <Clock className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto">
              We're building advanced calculators powered by our custom backend to give you the most accurate 
              projections for your hashrate heating investment. These tools will help you estimate everything from rough estimates 
              to your own complete Heat Audit.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
                ROI Calculator
              </h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                Calculate your return on investment with real-time bitcoin pricing and energy costs
              </p>
            </div>
            <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Savings Estimator
              </h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                Estimate your potential heating cost savings based on your utility rates
              </p>
            </div>
            <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
                Mining Revenue
              </h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                Calculate potential Bitcoin earnings from your hashrate heating system
              </p>
            </div>
          </div>

          <MiningRevenueCalculator />

          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-lg text-surface-600 dark:text-surface-400">
              In the meantime, get personalized calculations with our Heat Audit service
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Notified When Ready
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Resources Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Explore Other Resources
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              While you wait, check out these helpful resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/services"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Heat Audit
                </h3>
              </div>
              <p className="text-surface-600 dark:text-surface-400">
                Get personalized calculations and recommendations for your specific situation
              </p>
            </Link>

            <Link
              to="/content"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Content Resources
                </h3>
              </div>
              <p className="text-surface-600 dark:text-surface-400">
                Explore hashrate heating content, videos, guides, and resources
              </p>
            </Link>

            <Link
              to="/book-call"
              className="bg-surface-50 dark:bg-surface-700 rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Book a Call
                </h3>
              </div>
              <p className="text-surface-600 dark:text-surface-400">
                Speak directly with our team about your hashrate heating needs
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculators