import React from 'react';
import { ArrowLeft, Building2, CheckCircle, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FreeZoneCompanySetup = () => {
  const navigate = useNavigate();

  const setupSteps = [
    {
      step: 1,
      title: "Choose Your Free Zone",
      description: "Select the most suitable free zone based on your business activity and requirements",
      duration: "1-2 days",
      details: ["Research different free zones", "Compare packages and benefits", "Consider location and facilities"]
    },
    {
      step: 2,
      title: "Select Business Activity",
      description: "Choose from the approved list of business activities for your selected free zone",
      duration: "1 day",
      details: ["Review activity classifications", "Ensure compliance with zone regulations", "Plan for future expansion"]
    },
    {
      step: 3,
      title: "Reserve Company Name",
      description: "Submit your preferred company name for approval and reservation",
      duration: "1-3 days",
      details: ["Check name availability", "Submit name reservation", "Receive approval confirmation"]
    },
    {
      step: 4,
      title: "Prepare Documentation",
      description: "Gather and prepare all required documents for the application",
      duration: "3-5 days",
      details: ["Passport copies and photos", "Educational certificates", "Experience certificates", "Bank statements"]
    },
    {
      step: 5,
      title: "Submit Application",
      description: "File your complete application with the free zone authority",
      duration: "1 day",
      details: ["Complete application forms", "Submit all documents", "Pay required fees"]
    },
    {
      step: 6,
      title: "License Approval",
      description: "Receive your trade license and complete the setup process",
      duration: "3-7 days",
      details: ["License processing", "Final approvals", "License collection"]
    }
  ];

  const popularFreeZones = [
    {
      name: "DMCC",
      fullName: "Dubai Multi Commodities Centre",
      specialty: "Commodities & Trading",
      minCost: "AED 15,000",
      benefits: ["Prime location", "World-class facilities", "Strong business community"],
      color: "blue"
    },
    {
      name: "DIFC",
      fullName: "Dubai International Financial Centre",
      specialty: "Financial Services",
      minCost: "AED 35,000",
      benefits: ["Financial hub", "Common law jurisdiction", "Tax advantages"],
      color: "green"
    },
    {
      name: "RAKEZ",
      fullName: "Ras Al Khaimah Economic Zone",
      specialty: "General Business",
      minCost: "AED 8,500",
      benefits: ["Cost-effective", "Flexible packages", "Quick setup"],
      color: "purple"
    },
    {
      name: "IFZA",
      fullName: "International Free Zone Authority",
      specialty: "Technology & Innovation",
      minCost: "AED 9,971",
      benefits: ["Digital services", "Innovative solutions", "Competitive pricing"],
      color: "orange"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "100% Foreign Ownership",
      description: "Complete ownership and control of your business"
    },
    {
      icon: DollarSign,
      title: "Tax Benefits",
      description: "Zero corporate tax and personal income tax"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Streamlined processes for faster business launch"
    },
    {
      icon: Users,
      title: "Easy Visa Process",
      description: "Simplified visa procedures for employees and investors"
    }
  ];

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Building2 className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Setup Guides
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Step-by-Step Guide to Setting Up a Free Zone Company
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Free zones in the UAE offer 100% foreign ownership, quick licensing, and simplified processes. 
            This comprehensive guide walks you through every step of setting up your free zone company.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Free Zone Setup?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-blue-700">Free Zones Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">7-14</div>
                <div className="text-sm text-blue-700">Days Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">0%</div>
                <div className="text-sm text-blue-700">Corporate Tax (Most Zones)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Free Zones */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Popular Free Zones</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {popularFreeZones.map((zone, index) => (
              <div key={index} className={`border-l-4 border-${zone.color}-500 bg-${zone.color}-50 p-6 rounded-r-lg`}>
                <h3 className={`text-xl font-semibold text-${zone.color}-800 mb-1`}>{zone.name}</h3>
                <p className={`text-sm text-${zone.color}-600 mb-2`}>{zone.fullName}</p>
                <p className={`text-${zone.color}-700 mb-3`}>
                  <strong>Specialty:</strong> {zone.specialty}
                </p>
                <p className={`text-${zone.color}-700 mb-3`}>
                  <strong>Starting from:</strong> {zone.minCost}
                </p>
                <div className="space-y-1">
                  {zone.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={`flex items-center text-${zone.color}-700`}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Complete Setup Process</h2>
          
          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="grid md:grid-cols-3 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Required Documents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Passport copy (valid for 6+ months)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Passport-size photographs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Educational certificates (attested)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Experience certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Bank statements (6 months)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Business plan (detailed)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Company name reservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Memorandum of Association</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Share capital proof</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Office lease agreement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Typical Cost Breakdown</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost Range (AED)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trade License Fee</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">8,500 - 35,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Office Space (Annual)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">15,000 - 100,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Visa Processing</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">3,000 - 5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Professional Fees</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">5,000 - 15,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Additional Services</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,000 - 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            * Costs vary significantly based on the chosen free zone, business activity, and package selected
          </p>
        </div>

        {/* Tips for Success */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Tips for Successful Free Zone Setup</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-green-700">
              <li>• Research multiple free zones before deciding</li>
              <li>• Consider future business expansion plans</li>
              <li>• Understand visa allocation and requirements</li>
              <li>• Plan for banking and financial services</li>
            </ul>
            <ul className="space-y-2 text-green-700">
              <li>• Ensure all documents are properly attested</li>
              <li>• Consider office location and accessibility</li>
              <li>• Understand renewal requirements and costs</li>
              <li>• Plan for operational compliance needs</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Set Up Your Free Zone Company?</h3>
          <p className="mb-6">
            Our experienced team can guide you through the entire free zone setup process, from choosing the right zone 
            to completing all documentation and approvals. We'll ensure a smooth and efficient setup experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              Start Your Setup
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Compare Free Zones
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeZoneCompanySetup;