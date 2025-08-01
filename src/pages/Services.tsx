import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Activity, Users, ChevronDown, ChevronUp, X, Search, Cog, Monitor, ChevronLeft, ChevronRight } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [buildType, setBuildType] = useState<'residential' | 'commercial'>('residential')
  const [imageViewer, setImageViewer] = useState<{images: string[], titles: string[], currentIndex: number} | null>(null)
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
      title: 'Sizing, Savings & Design',
      description: 'Curious? Get system sizing, estimated earnings, ROI, hardware recommendations, design & quote.',
      icon: Search,
      flipText: 'Start at the Heat Audit if you\'re curious, seeking details, or weighing options.',
      targetSection: 'audit-service'
    },
    {
      id: 'installation',
      title: 'Project Plan & Installation',
      description: 'Ready? Get your integrated solution project plan with professional installers that fit your timeline.',
      icon: Cog,
      flipText: 'Start with Plan & Installation if you\'re ready to heat with hashrate, We\'ll handle the rest.',
      targetSection: 'installation-service'
    },
    {
      id: 'monitoring',
      title: 'Automate Health Monitoring',
      description: 'Opted in? Remote monitoring tells us when it\'s time for maintenence, so you don\'t have to think about it.',
      icon: Monitor,
      flipText: 'Start with Remote Health Monitoring if you already have hashrate heat.',
      targetSection: 'monitoring-service'
    }
  ]

  const getAuditService = (type: 'residential' | 'commercial') => ({
    id: 'audit',
    name: "Heat Audit Analysis & Design",
    description: "Get a comprehensive analysis of your heating needs. The Heat Audit optimizes earnings and ROI for your heat demand with a tailored solution.",
    price: type === 'residential' ? "$500" : "$2500",
    features: [
      "Optimized heating system sizing",
      "Utility bill savings and revenue projections",
      "Upgrade project cost, total cost of ownership, and ROI estimates",
      "Personalized recommendations and next steps",
      "1-hour report walkthrough call"
    ],
    icon: FileText,
    image: "heating_subsidy.png",
    exampleImages: [
      "Exergy Heat Audit Report Template V1_pg1.png",
      "Exergy Heat Audit Report Template V1_pg2.png",
      "Exergy Heat Audit Report Template V1_pg3.png"
    ],
    exampleTitles: [
      "Heat Audit Report - Page 1",
      "Heat Audit Report - Page 2",
      "Heat Audit Report - Page 3"
    ],
    details: {
      inputs: type === 'residential' ? [
        "Current heating bills or home dimensions",
        "Local electricity rates and terms",
        "Insulation specifications",
        "Project location for weather data",
        "Key variables like solar or unique heating paterns"
      ] : [
        "Project heating bills, plans and specifications",
        "Local energy rates, TOU or demand charges",
        "Expected occupancy patterns or supplimental heat sources",
        "Desired temperatures zones and criterea",
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
    buttonText: `Purchase ${type === 'residential' ? 'Residential' : 'Commercial'} Heat Audit`,
    buttonLink: type === 'residential' 
      ? 'https://pay.zaprite.com/pl_MRzvvmSAkL'
      : 'https://pay.zaprite.com/pl_GhSjRJ6mTI'
  })

  const getDesignService = () => ({
    id: 'installation',
    name: "Hashrate Heating Installation",
    description: "Get a complete hashrate heating installation plan tailored to your specific needs and requirements.",
    price: "50% Deposit",
    features: [
      "Includes Heat Audit analysis",
      "Custom heating system integration design",
      "Detailed cost breakdown and performance projections",
      "Installation project plan",
      "Project implementation with preferred partner installers",      
    ],
    icon: Wrench,
    image: "LiquidHashHeat_ex.png",
    exampleImage: "SystemDesigns.png",
    exampleTitle: "System Design Examples",
    details: {
      process: [
        "Initial consultation",
        "Home assessment",
        "Heat Audit and System design",
        "Project plan and quote",
        "Installation & Comissioning"
      ],
      includes: [
        "Detailed system specifications",
        "Cost performance estimates",
        "Timeline projection",
        "Installation partner coordination",
        "Customer training tutorial"
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
      name: "Remote Health Monitoring",
      description: "24/7 monitoring and maintenance of your hashrate heating system to ensure optimal performance.",
      price: "Contact for details",
      features: [
        "Exergy real-time monitoring",
        "Preventive maintenance alerts",
        "Performance optimization",
        "Upgrades and recommendations"
      ],
      icon: Activity,
      image: "remote_monitoring.png",
      details: {
        monitoring: [
          "Real-time performance tracking",
          "System health checks",
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
      description: "Expert consultation for businesses looking to implement or optimize hashrate heating solutions.",
      price: "Contact for details",
      features: [
        "Industry expertise",
        "Hashrate heating modeling tools",
        "Technical consulting",
        "Implementation support"
      ],
      icon: Users,
      image: "hashheat_consulting.png",
      details: {
        expertise: [
          "System sizing",
          "Design and control",
          "Integration strategies",
          "Target markets",
          "Heating and Mining expertise"
        ],
        services: [
          "Technical consultation",
          "Strategy development",
          "Implementation guidance",
          "Content and marketing",
          "Ongoing support"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=consulting"
    }
  ]

  const openImageViewer = (images: string | string[], titles: string | string[]) => {
    if (Array.isArray(images) && Array.isArray(titles)) {
      setImageViewer({ images, titles, currentIndex: 0 })
    } else {
      setImageViewer({ 
        images: [images as string], 
        titles: [titles as string], 
        currentIndex: 0 
      })
    }
  }

  const closeImageViewer = () => {
    setImageViewer(null)
  }

  const nextImage = () => {
    if (imageViewer && imageViewer.currentIndex < imageViewer.images.length - 1) {
      setImageViewer({
        ...imageViewer,
        currentIndex: imageViewer.currentIndex + 1
      })
    }
  }

  const prevImage = () => {
    if (imageViewer && imageViewer.currentIndex > 0) {
      setImageViewer({
        ...imageViewer,
        currentIndex: imageViewer.currentIndex - 1
      })
    }
  }

  const goToImage = (index: number) => {
    if (imageViewer) {
      setImageViewer({
        ...imageViewer,
        currentIndex: index
      })
    }
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Hashrate Heating Services | Heat Audits & Installation | EXERGY</title>
        <meta name="description" content="Professional hashrate heating services from EXERGY. Heat audits, system design, installation, and monitoring. Transform your heating system into a Bitcoin-earning asset." />
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
              Choose a starting point that suits you
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="bg-white dark:bg-surface-700 rounded-lg shadow-lg p-6 border-2 border-surface-200 dark:border-surface-600 h-full flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow">
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white">
                          <step.icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-3 text-center">
                          {step.title}
                        </h3>
                        <p className="text-surface-600 dark:text-surface-400 text-center text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="text-center mt-4">
                        <p className="text-xs text-surface-500 dark:text-surface-400">Flip to see where to start</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-primary-600 text-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-center items-center text-center">
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
                
                {/* Build Type Toggle for Audit Service */}
                {service.id === 'audit' && (
                  <div className="flex items-center space-x-4 p-4 bg-surface-100 dark:bg-surface-800 rounded-lg">
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

                {/* Build Type Toggle for Upgrade Service */}

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
                      <button
                        onClick={() => {
                          if (service.exampleImages && service.exampleTitles) {
                            openImageViewer(service.exampleImages, service.exampleTitles)
                          } else if (service.exampleImage && service.exampleTitle) {
                            openImageViewer(service.exampleImage, service.exampleTitle)
                          }
                        }}
                        className="px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
                      >
                        Example
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Image Viewer Modal with Carousel */}
      {imageViewer && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity cursor-pointer" 
              aria-hidden="true"
              onClick={closeImageViewer}
            >
              <div className="absolute inset-0 bg-surface-900 opacity-95"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full">
              <div className="bg-white dark:bg-surface-900 px-4 pt-5 pb-4 sm:p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                      {imageViewer.titles[imageViewer.currentIndex]}
                    </h3>
                    {imageViewer.images.length > 1 && (
                      <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                        {imageViewer.currentIndex + 1} of {imageViewer.images.length}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={closeImageViewer}
                    className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Image Container with Navigation */}
                <div className="relative flex justify-center bg-surface-50 dark:bg-surface-800 rounded-lg p-4">
                  {/* Previous Button */}
                  {imageViewer.images.length > 1 && imageViewer.currentIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-surface-700 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" />
                    </button>
                  )}

                  {/* Image */}
                  <img
                    src={imageViewer.images[imageViewer.currentIndex]}
                    alt={imageViewer.titles[imageViewer.currentIndex]}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                  />

                  {/* Next Button */}
                  {imageViewer.images.length > 1 && imageViewer.currentIndex < imageViewer.images.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-surface-700 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6 text-surface-900 dark:text-surface-100" />
                    </button>
                  )}
                </div>

                {/* Image Dots Navigation */}
                {imageViewer.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {imageViewer.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === imageViewer.currentIndex
                            ? 'bg-primary-600'
                            : 'bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Instructions */}
                <div className="text-center mt-4">
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    {imageViewer.images.length > 1 
                      ? 'Use arrow buttons or dots to navigate • Click outside or press X to close'
                      : 'Click outside or press X to close'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize your Heating Potential
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our favorite products - or book a call to find the right service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              View Our Recommended Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base font-subheading"
            >
              Schedule Service Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default Services