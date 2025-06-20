import React, { useState } from 'react'
import { Calculator, TrendingUp, Thermometer, DollarSign, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('roi')
  const [values, setValues] = useState({
    currentBill: '',
    systemSize: '',
    electricityRate: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculators = [
    {
      id: 'roi',
      name: 'ROI Calculator',
      icon: TrendingUp,
      description: 'Calculate your return on investment with hashrate heating'
    },
    {
      id: 'savings',
      name: 'Energy Savings',
      icon: Thermometer,
      description: 'Estimate your potential energy savings'
    },
    {
      id: 'profit',
      name: 'Mining Profit',
      icon: DollarSign,
      description: 'Calculate potential mining earnings'
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Financial Calculators
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estimate your potential savings and earnings with our interactive calculators
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Calculator Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveTab(calc.id)}
              className={`flex items-center p-4 rounded-lg transition-colors ${
                activeTab === calc.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-surface-700'
              }`}
            >
              <calc.icon className="h-5 w-5 mr-2" />
              {calc.name}
            </button>
          ))}
        </div>

        {/* Calculator Form */}
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-6">
                Enter Your Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Current Monthly Heating Bill ($)
                </label>
                <input
                  type="number"
                  name="currentBill"
                  value={values.currentBill}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
                  placeholder="e.g., 200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Desired System Size (kW)
                </label>
                <input
                  type="number"
                  name="systemSize"
                  value={values.systemSize}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
                  placeholder="e.g., 5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                  Electricity Rate ($/kWh)
                </label>
                <input
                  type="number"
                  name="electricityRate"
                  value={values.electricityRate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
                  placeholder="e.g., 0.12"
                />
              </div>
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors">
                Calculate
              </button>
            </div>

            {/* Results Section */}
            <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-surface-900 dark:text-surface-100 mb-6">
                Estimated Results
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-surface-700 dark:text-surface-300">
                    Monthly Savings
                  </h3>
                  <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">
                    ${values.currentBill ? Math.round(Number(values.currentBill) * 0.6) : '0'}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-surface-700 dark:text-surface-300">
                    Payback Period
                  </h3>
                  <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">
                    {values.currentBill ? '18-24 months' : '-'}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-surface-700 dark:text-surface-300">
                    5-Year ROI
                  </h3>
                  <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">
                    {values.currentBill ? '250%' : '-'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Want Exact Estimates Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
            Want Exact Numbers?
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
            Schedule a Heat Audit or sign up for System Upgrade. We'll run the numbers for your specific heating profile and maximize revenue.
          </p>
          <Link
            to="/services"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            View Our Services
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Calculators