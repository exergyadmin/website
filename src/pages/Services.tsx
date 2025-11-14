import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Activity, Users, ChevronDown, ChevronUp, Search, Cog, Monitor, ChevronLeft, ChevronRight } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [buildType, setBuildType] = useState<'residential' | 'commercial'>('residential')
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const journeySteps = [
    {
      id: 'audit',
      title: 'Sizing, Savings & Recommendation',
      description: 'Curious? Get system sizing, savings, our recommendations & quote.',
      icon: Search,
      flipText: 'Start at the Heat Audit if you\'re curious, seeking details, or weighing options.',
      targetSection: 'audit-service'
    },
    {
      id: 'installation',
      title: 'Install Assistance',
      description: 'Ready? Get your hardware, project plan and installation scheduled.',
      icon: Cog,
      flipText: 'Start with Hardware Installation if you\'re ready to heat with hashrate, We\'ll handle the rest.',
      targetSection: 'installation-service'
    },
    {
      id: 'monitoring',
      title: 'Automatic Monitoring',
      description: 'Opted in? Automatically get notified when maintenence is due.',
      icon: Monitor,
      flipText: 'Start with remote Heartbeat Monitoring if you already have hashrate heat.',
      targetSection: 'monitoring-service'
    },
    {
      id: 'consulting',
      title: 'Team Consulting',
      description: 'Want to offer or harness Hashrate Heating for your business?',
      icon: Users,
      flipText: 'Start at Consulting if you already size, install or service heating systems.',
      targetSection: 'consulting-service'
    }
  ]

  const getAuditService = (type: 'residential' | 'commercial') => ({
    id: 'audit',
    name: "Heat Audit Analysis",
    description: "Get a comprehensive understanding of your heating needs and potential. The Heat Audit optimizes sizing and savings, along with a personalized recommendation and project quote.",
    price: type === 'residential' ? "$500" : "$2500",
    features: [
      "Optimal heating system sizing",
      "Estimated utility bill changes and revenue",
      "Project cost, total cost of ownership, and ROI projections",
      "Personalized recommendations and next steps",
      "Professional report walkthrough call"
    ],
    icon: FileText,
    image: "heating_subsidy.png",
    exampleImages: [
      "https://243159145.fs1.hubspotusercontent-na2.net/hubfs/243159145/Heat%20Audit%20Report/Propane%20Eample-Heat%20Audit%20Report.pdf"
    ],
    exampleTitles: [
      "Heat Audit Report"
    ],
    details: {
      inputs: type === 'residential' ? [
        "Current heating bills or home specifications",
        "Local utility rates and terms",
        "Project location for weather data",
        "Key variables like solar or unique heating paterns"
      ] : [
        "Project heating bills, building plans and specifications",
        "Local utility rates, TOU or demand charges",
        "Expected occupancy patterns or supplimental heat sources",
        "Desired temperatures, zones and other criterea",
        "Location and weather data, or driving heat factors"
      ],
      deliverables: [
        "Comprehensive analysis report",
        "Optimal heating system sizing",
        "Estimated revenue and utility cost savings projections",
        "Heating hardware options and personalized recommendations",
        "Project quote cost, ROI, and total cost of ownership estimates",
        "1-hour consultation call and next step walkthrough"
      ]
    },
    buttonText: `Request ${type === 'residential' ? 'Residential' : 'Commercial'} Heat Audit`,
    buttonLink: type === 'residential' 
      ? 'https://40rqsp.share-na2.hsforms.com/2hJgXKKL6RPWk-LYX5bo3jA'
      : 'https://40rqsp.share-na2.hsforms.com/2hJgXKKL6RPWk-LYX5bo3jA'
  })

  const getDesignService = () => ({
    id: 'installation',
    name: "Hardware Installation",
    description: "Hashrte heater procurement and installation done right. We work with our partners and professional tradesmen to accommodate your specific heating needs.",
    price: "50% Deposit",
    features: [
      "Exergy hardware procurement",
      "Install coordination and on-site setup (Colorado, USA)",
      "Install guides and support (Other markets),"    
    ],
    icon: Wrench,
    image: "LiquidHashHeat_ex.png",
    exampleImage: "https://x.com/Exergy_LLC/status/1960864287427321905",
    exampleTitle: "System Design Examples",
    details: {
      process: [
        "Initial consultation",
        "Hardware selection",
        "Installation & Comissioning"
      ],
      includes: [
        "Detailed system specifications",
        "Install and setup guides",
        "Exergy support",
        "On-site installation coordination (CO)",
      ]
    },
    buttonText: "Contact Us",
    buttonLink: "/contact"
  })

  const services = [
    getAuditService(buildType),
    getDesignService(),
    {
      id: 'monitoring',
      name: "Heartbeat Monitoring",
      description: "24/7 remote monitoring oversees health and predicts maintenance for your hashrate heating system - ensuring maximum performance and savings.",
      price: "Coming Soon",
      features: [
        "Exergy real-time monitoring",
        "Preventive maintenance alerts",
        "Performance optimization",
        "Timely upgrade recommendations"
      ],
      icon: Activity,
      image: "remote_monitoring.png",
      details: {
        monitoring: [
          "Real-time performance tracking",
          "System health check reminders",
          "Alert notifications",
          "Status reports"
        ],
        maintenance: [
          "Regular system updates",
          "Preventive maintenance",
          "Emergency support",
          "Performance optimization"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=monitoring"
    },
    {
      id: 'consulting',
      name: "Hashrate Heat Consulting",
      description: "Project based consultation for businesses looking to implement or optimize hashrate heating solutions.",
      price: "Contact for Details",
      features: [
        "Industry expertise",
        "Exergy modeling tools",
        "Implementation support",
        "Coordination with MEP teams and other sub-contractors",
      ],
      icon: Users,
      image: "hashheat_consulting.png",
      details: {
        expertise: [
          "System sizing",
          "Design and control",
          "Integration strategies",
          "Tradesmen training",
          "Hardware and software expertise"
        ],
        services: [
          "Technical consultations",
          "Strategy development",
          "Implementation guidance",
          "Ongoing support"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=consulting"
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Hashrate Heating Services</title>
        <meta name="description" content="Professional hashrate heating services from Exergy. Heat audits, hardware installation, monitoring and consulting. Transform your heating system into a bitcoin-earning asset." />
        <meta name="keywords" content="heat audit, hashrate heating installation, bitcoin mining heat services, heating system design, remote monitoring" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From curiosity to implementation, we'll help you harness hashrate heating
            </p>
          </div>
        </div>
      </div>

      {/* Your Hashrate Heating Journey Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
              Your Hashrate Heating Journey
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
              Which starting point suits you?
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className="relative perspective-1000"
                onMouseEnter={() => setFlippedCard(step.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                {/* Card Container with 3D flip effect */}
                <div className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === step.id ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white dark:bg-surface-700 rounded-lg shadow-lg p-6 border-2 border-surface-200 dark:border-surface-600 h-full flex flex-col justify-center cursor-pointer hover:shadow-xl transition-shadow">
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white">
                          <step.icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-4 text-center">
                          {step.id === 'audit' ? (
                            <>
                              Sizing, Savings &<br />
                              Recommendation
                            </>
                          ) : step.id === 'installation' ? (
                            <>
                              Install<br />
                              Assistance
                            </>
                          ) : step.id === 'monitoring' ? (
                            <>
                              Automatic<br />
                              Monitoring
                            </>
                          ) : step.id === 'consulting' ? (
                            <>
                              Team<br />
                              Consulting
                            </>
                          ) : (
                            step.title
                          )}
                        </h3>
                        <p className="text-surface-600 dark:text-surface-400 text-center text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-primary-600 text-white rounded-lg shadow-lg p-5 h-full flex flex-col justify-center items-center text-center">
                      <div className="mb-4">
                        <step.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                      </div>
                      <h3 className="text-lg font-bold mb-4">Start Here If:</h3>
                      <p className="text-primary-100 text-sm leading-relaxed mb-6">
                        {step.flipText}
                      </p>
                      <button
                        onClick={() => scrollToSection(step.targetSection)}
                        className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-6">
              Not sure where to start? Book a quick intro call to discuss your specific needs.
            </p>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div key={service.id} id={`${service.id}-service`} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-lg">
                  <img
                    src={service.image}
                    alt={`${service.name} - ${service.description}`}
                    className="rounded-lg shadow-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100">{service.name}</h2>
                
                {/* Add subtitle for Heat Audit service */}
                {service.id === 'audit' && (
                  <p className="text-lg text-surface-500 dark:text-surface-400 italic mt-2">
                    Help me figure out what I need and what I can earn
                  </p>
                )}
                
                {/* Add subtitle for Installation service */}
                {service.id === 'installation' && (
                  <p className="text-lg text-surface-500 dark:text-surface-400 italic mt-2">
                    I know I want to do this. Help me get the hardware or installation done
                  </p>
                )}
                
                {/* Add subtitle for Monitoring service */}
                {service.id === 'monitoring' && (
                  <p className="text-lg text-surface-500 dark:text-surface-400 italic mt-2">
                    I have hashrate heat, and want you to keep an eye on it for me
                  </p>
                )}
                
                {/* Add subtitle for Consulting service */}
                {service.id === 'consulting' && (
                  <p className="text-lg text-surface-500 dark:text-surface-400 italic mt-2">
                    Consult with my engineers, subs, modelers or tradesmen about hashrate heat
                  </p>
                )}
                
                <p className="text-lg text-surface-600 dark:text-surface-400">{service.description}</p>
                
                <div className="bg-white dark:bg-surface-800 rounded-lg p-6 shadow-lg space-y-6">
                  <div>
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">{service.price}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-surface-700 dark:text-surface-300">
                          <ArrowRight className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-surface-200 dark:border-surface-700">
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="w-full flex items-center justify-between text-surface-900 dark:text-surface-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <span className="font-semibold">Service Details</span>
                      {expandedService === service.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    
                    {expandedService === service.id && (
                      <div className="mt-4 space-y-4">
                        {Object.entries(service.details).map(([key, items]) => (
                          <div key={key}>
                            <h4 className="text-lg font-semibold text-surface-900 dark:text-surface-100 capitalize mb-2">
                              {key}
                            </h4>
                            <ul className="space-y-2">
                              {items.map((item, i) => (
                                <li key={i} className="flex items-center text-surface-700 dark:text-surface-300">
                                  <ArrowRight className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Build Type Toggle for Audit Service - moved to bottom */}
                  {service.id === 'audit' && (
                    <div className="flex items-center space-x-4 p-2 bg-surface-100 dark:bg-surface-800 rounded-lg">
                      <button
                        onClick={() => setBuildType('residential')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          buildType === 'residential'
                            ? 'bg-primary-600 text-white'
                            : 'bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300'
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        onClick={() => setBuildType('commercial')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          buildType === 'commercial'
                            ? 'bg-primary-600 text-white'
                            : 'bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300'
                        }`}
                      >
                        Commercial
                      </button>
                    </div>
                  )}

                  <div className={`${(service.exampleImage || service.exampleImages) ? 'flex gap-4' : ''} pt-6 border-t border-surface-200 dark:border-surface-700`}>
                    {service.buttonLink.startsWith('http') ? (
                      <a
                        href={service.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${(service.exampleImage || service.exampleImages) ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading`}
                      >
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        to={service.buttonLink}
                        className={`${(service.exampleImage || service.exampleImages) ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading`}
                      >
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    )}
                    {(service.exampleImage || service.exampleImages) && (
                      <a
                        href={service.exampleImages ? service.exampleImages[0] : service.exampleImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading flex items-center"
                      >
                        Example
                      </a>
                    )}
                  </div>

                  {/* Add Calculate Your Own button for Heat Audit service */}
                  {service.id === 'audit' && (
                    <div className="pt-0">
                      <Link
                        to="/calculators"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
                      >
                        Calculate Your Own
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  )}
                  {/* Add Calculate Your Own button for Heat Audit service */}
                  {service.id === 'installation' && (
                    <div className="pt-0">
                      <Link
                        to="/products"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
                      >
                        Order and Oversee Your Own Install
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize your Heating Potential
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our products - or book a call to find the right service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              View Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base font-subheading"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services