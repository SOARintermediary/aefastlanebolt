import React from 'react';
import { ArrowLeft, FileText, CheckCircle, Clock, AlertTriangle, Users, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UAEResidenceVisaApplication = () => {
  const navigate = useNavigate();

  const applicationSteps = [
    {
      step: 1,
      title: "Obtain Trade License",
      description: "Ensure your business license is approved and active",
      duration: "Already completed",
      requirements: ["Valid trade license", "Business registration", "MOA approval"]
    },
    {
      step: 2,
      title: "Apply for Entry Permit",
      description: "Submit entry permit application for yourself and employees",
      duration: "3-5 working days",
      requirements: ["Passport copy", "Passport photos", "Application form", "License copy"]
    },
    {
      step: 3,
      title: "Medical Examination",
      description: "Complete medical tests at approved healthcare centers",
      duration: "1-2 days",
      requirements: ["Entry permit", "Passport", "Medical form", "Vaccination records"]
    },
    {
      step: 4,
      title: "Emirates ID Application",
      description: "Apply for Emirates ID at typing centers",
      duration: "Same day application",
      requirements: ["Medical certificate", "Entry permit", "Passport photos", "Tenancy contract"]
    },
    {
      step: 5,
      title: "Visa Stamping",
      description: "Get residence visa stamped in passport",
      duration: "1-2 days",
      requirements: ["Medical certificate", "Emirates ID receipt", "Passport", "Fees payment"]
    },
    {
      step: 6,
      title: "Emirates ID Collection",
      description: "Collect Emirates ID card when ready",
      duration: "7-14 days after application",
      requirements: ["SMS notification", "Receipt", "Passport", "Original documents"]
    }
  ];

  const documentChecklist = [
    {
      category: "Personal Documents",
      documents: [
        "Passport with minimum 6 months validity",
        "Passport-size photographs (white background)",
        "Educational certificates (attested)",
        "Marriage certificate (if applicable)",
        "Birth certificates for children"
      ]
    },
    {
      category: "Business Documents",
      documents: [
        "Trade license copy",
        "Memorandum of Association",
        "Tenancy contract (office lease)",
        "Bank account opening letter",
        "Salary certificate or employment contract"
      ]
    },
    {
      category: "Medical Requirements",
      documents: [
        "Medical fitness certificate",
        "Blood test results",
        "Chest X-ray",
        "Vaccination records",
        "Health insurance (recommended)"
      ]
    }
  ];

  const visaTypes = [
    {
      type: "Investor Visa",
      description: "For business owners and partners",
      validity: "2-3 years",
      benefits: ["No sponsor required", "Can sponsor family", "Multiple entry", "Work authorization"]
    },
    {
      type: "Employment Visa",
      description: "For company employees",
      validity: "2-3 years",
      benefits: ["Work permit included", "Renewable", "Family sponsorship eligible", "Healthcare access"]
    },
    {
      type: "Partner Visa",
      description: "For business partners",
      validity: "2-3 years",
      benefits: ["Business operation rights", "Family sponsorship", "Multiple entry", "Banking access"]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Document Attestation",
      solution: "Ensure all foreign documents are properly attested by UAE Embassy",
      prevention: "Start attestation process early, use authorized agents"
    },
    {
      challenge: "Medical Test Delays",
      solution: "Book appointments in advance at approved centers",
      prevention: "Complete medical tests immediately after entry permit approval"
    },
    {
      challenge: "Emirates ID Delays",
      solution: "Apply immediately after medical clearance",
      prevention: "Ensure all documents are complete and accurate"
    },
    {
      challenge: "Visa Stamping Issues",
      solution: "Double-check all requirements before submission",
      prevention: "Use professional services for complex cases"
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
            <FileText className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Visa & Immigration
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Apply for UAE Residence Visa Through Your Company
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Once your business license is issued, you're eligible to apply for a UAE residence visa. 
            AEFastLane makes this process smooth and efficient, handling all the complex procedures on your behalf.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Process Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Timeline</h3>
              <p className="text-blue-600">15-25 working days</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Success Rate</h3>
              <p className="text-green-600">99.5% with AEFastLane</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">Processing</h3>
              <p className="text-purple-600">Expedited service available</p>
            </div>
          </div>
        </div>

        {/* Visa Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Available Visa Types</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-3">{visa.description}</p>
                <div className="mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="w-3 h-3 mr-1" />
                    Valid for {visa.validity}
                  </span>
                </div>
                <ul className="space-y-1">
                  {visa.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Step-by-Step Application Process</h2>
          
          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
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
                      {step.requirements.map((requirement, reqIndex) => (
                        <div key={reqIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {requirement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Complete Document Checklist</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {documentChecklist.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.documents.map((document, docIndex) => (
                    <li key={docIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{document}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Common Challenges & Solutions</h2>
          
          <div className="space-y-6">
            {commonChallenges.map((item, index) => (
              <div key={index} className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">{item.challenge}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-1">Solution:</h4>
                    <p className="text-yellow-600 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-1">Prevention:</h4>
                    <p className="text-yellow-600 text-sm">{item.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Cost Breakdown</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Government Fees (AED)
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Fees (AED)
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total (AED)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Entry Permit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,190</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,690</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Medical Examination</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">310</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">200</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">510</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Emirates ID</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">380</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">150</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">530</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Visa Stamping</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">580</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">300</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">880</td>
                </tr>
                <tr className="bg-primary/5 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary text-right">2,460</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary text-right">1,150</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary text-right">3,610</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            * Costs may vary based on specific circumstances and current government fees
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes</h3>
              <div className="space-y-2 text-yellow-700">
                <div>• All foreign documents must be attested by UAE Embassy in country of origin</div>
                <div>• Medical tests must be completed at government-approved centers only</div>
                <div>• Visa processing times may vary during peak seasons</div>
                <div>• Emirates ID is mandatory for all UAE residents</div>
                <div>• Health insurance is recommended and may be required for certain visa types</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Let AEFastLane Handle Your Visa Application</h3>
          <p className="mb-6">
            Our experienced team manages the entire visa application process, from document preparation to final stamping. 
            We ensure compliance with all requirements and provide regular updates throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              Start Visa Application
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEResidenceVisaApplication;