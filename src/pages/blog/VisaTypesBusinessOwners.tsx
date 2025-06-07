import React from 'react';
import { ArrowLeft, Plane, CheckCircle, Users, Building2, Star, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisaTypesBusinessOwners = () => {
  const navigate = useNavigate();

  const visaTypes = [
    {
      type: "Investor Visa",
      duration: "2-3 Years",
      eligibility: "Business owners with valid trade license",
      benefits: ["Multiple entry", "Sponsor family members", "No sponsor required", "Work permit included"],
      requirements: ["Valid trade license", "Passport copy", "Emirates ID application", "Medical certificate"],
      cost: "AED 2,000 - 5,000",
      color: "blue"
    },
    {
      type: "Employment Visa",
      duration: "2-3 Years",
      eligibility: "Employees of UAE companies",
      benefits: ["Work authorization", "Renewable", "Family sponsorship eligible", "Healthcare access"],
      requirements: ["Employment contract", "Educational certificates", "Medical certificate", "Passport copy"],
      cost: "AED 3,000 - 6,000",
      color: "green"
    },
    {
      type: "Golden Visa",
      duration: "5-10 Years",
      eligibility: "Investors, entrepreneurs, specialists",
      benefits: ["Long-term residency", "No sponsor needed", "Multiple entry", "Extended family sponsorship"],
      requirements: ["Investment proof", "Business plan", "Financial statements", "Professional qualifications"],
      cost: "AED 5,000 - 10,000",
      color: "yellow"
    },
    {
      type: "Family Visa",
      duration: "1-3 Years",
      eligibility: "Dependents of UAE residents",
      benefits: ["Residence permit", "Education access", "Healthcare benefits", "Travel freedom"],
      requirements: ["Sponsor's documents", "Relationship proof", "Medical certificate", "Salary certificate"],
      cost: "AED 2,500 - 4,000",
      color: "purple"
    }
  ];

  const businessBenefits = [
    {
      icon: Building2,
      title: "Business Flexibility",
      description: "Operate your business while maintaining legal residency status"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Sponsor key employees and build your team in the UAE"
    },
    {
      icon: Star,
      title: "Quality of Life",
      description: "Access world-class healthcare, education, and lifestyle"
    },
    {
      icon: Plane,
      title: "Global Mobility",
      description: "Travel freely with UAE residence and strong passport access"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Document Preparation",
      description: "Gather all required documents and ensure proper attestation",
      duration: "3-5 days"
    },
    {
      step: 2,
      title: "Medical Examination",
      description: "Complete medical tests at approved healthcare centers",
      duration: "1-2 days"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit visa application with all supporting documents",
      duration: "1 day"
    },
    {
      step: 4,
      title: "Processing & Approval",
      description: "Immigration authorities review and process application",
      duration: "5-15 days"
    },
    {
      step: 5,
      title: "Emirates ID Application",
      description: "Apply for Emirates ID after visa approval",
      duration: "7-14 days"
    },
    {
      step: 6,
      title: "Visa Stamping",
      description: "Get visa stamped in passport and collect Emirates ID",
      duration: "1-3 days"
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
            <Plane className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Visa & Immigration
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Visa Types and Their Benefits for Business Owners in the UAE
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding the different visa options available to business owners in the UAE is crucial for making informed decisions 
            about your residency status and business operations. Here's a comprehensive guide to help you choose the right visa type.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Why Visa Choice Matters for Business Owners</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visa Types Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Visa Types Comparison</h2>
          
          <div className="space-y-6">
            {visaTypes.map((visa, index) => (
              <div key={index} className={`border-l-4 border-${visa.color}-500 bg-${visa.color}-50 p-6 rounded-r-lg`}>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className={`text-xl font-semibold text-${visa.color}-800 mb-2`}>{visa.type}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className={`text-${visa.color}-700`}>Duration: {visa.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span className={`text-${visa.color}-700`}>Cost: {visa.cost}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-${visa.color}-800 mb-2`}>Key Benefits</h4>
                    <ul className="space-y-1">
                      {visa.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-center text-${visa.color}-700 text-sm`}>
                          <CheckCircle className="h-3 w-3 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-${visa.color}-800 mb-2`}>Requirements</h4>
                    <ul className="space-y-1">
                      {visa.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className={`flex items-center text-${visa.color}-700 text-sm`}>
                          <CheckCircle className="h-3 w-3 mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">General Application Process</h2>
          
          <div className="space-y-6">
            {applicationProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200">
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
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Choosing the Right Visa */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">How to Choose the Right Visa</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Investor Visa If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You own a UAE business with a valid trade license</li>
                <li>• You want to sponsor family members</li>
                <li>• You need flexibility to work in your own business</li>
                <li>• You prefer a straightforward application process</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Golden Visa If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You meet the investment or professional criteria</li>
                <li>• You want long-term stability (5-10 years)</li>
                <li>• You prefer not to have a sponsor</li>
                <li>• You want to sponsor extended family members</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Employment Visa If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You work for a UAE company as an employee</li>
                <li>• Your employer handles the sponsorship</li>
                <li>• You want standard employment benefits</li>
                <li>• You're building experience before starting your own business</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Cost Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Visa Type
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Government Fees
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medical & Emirates ID
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Fees
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Estimate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Investor Visa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,200</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">690</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">3,390</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Employment Visa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">3,590</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">690</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">6,280</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Golden Visa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,800</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">690</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">3,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">6,490</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Family Visa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,200</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">690</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,200</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">3,090</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            * All amounts in AED. Costs may vary based on specific circumstances and current government fees.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Help Choosing the Right Visa?</h3>
          <p className="mb-6">
            Our visa experts can assess your specific situation and recommend the best visa option for your business and personal needs. 
            We handle the entire application process to ensure a smooth and successful outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Plane className="mr-2 h-5 w-5" />
              Get Visa Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Start Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaTypesBusinessOwners;