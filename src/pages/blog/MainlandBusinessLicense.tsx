import React from 'react';
import { ArrowLeft, FileText, CheckCircle, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MainlandBusinessLicense = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: 1,
      title: "Choose Your Business Activity",
      description: "Select from over 2,000 approved business activities",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Reserve Your Trade Name",
      description: "Submit and get approval for your company name",
      duration: "1-3 days"
    },
    {
      step: 3,
      title: "Prepare Required Documents",
      description: "Gather and attest all necessary documentation",
      duration: "3-7 days"
    },
    {
      step: 4,
      title: "Submit License Application",
      description: "File your application with the Department of Economic Development",
      duration: "5-10 days"
    },
    {
      step: 5,
      title: "Secure Office Space",
      description: "Obtain a tenancy contract for your business premises",
      duration: "1-5 days"
    },
    {
      step: 6,
      title: "Complete Final Approvals",
      description: "Get final approvals and collect your license",
      duration: "2-5 days"
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
              Licensing Guide
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Open a Mainland Business License in Dubai
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Starting a business in Dubai mainland is one of the most strategic moves you can make as an entrepreneur or investor. 
            This comprehensive guide walks you through every step of the process.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Quick Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Timeline</h3>
              <p className="text-blue-600">15-30 working days</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Starting Cost</h3>
              <p className="text-green-600">From AED 15,000</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">Ownership</h3>
              <p className="text-purple-600">100% Foreign Ownership</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Step-by-Step Process</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Required Documents</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Individual Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Passport copy (attested)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">UAE residence visa copy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Emirates ID copy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">No Objection Certificate (if employed)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Bank statement (6 months)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Corporate Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Certificate of Incorporation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Memorandum & Articles of Association</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Board Resolution</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Authorized signatory passport</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Company bank statements</span>
                </li>
              </ul>
            </div>
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
                    Item
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost (AED)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trade License Fee</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">15,000 - 25,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Memorandum of Association</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">External Approvals</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,000 - 5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Office Rent (Annual)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">20,000 - 100,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Professional Service Fees</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">5,000 - 15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• All foreign documents must be attested by the UAE Embassy in the country of origin</li>
                <li>• Some business activities require additional approvals from relevant authorities</li>
                <li>• Office space must be secured before license issuance</li>
                <li>• Minimum share capital requirements vary by business activity</li>
                <li>• Processing times may vary during peak seasons</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Dubai Mainland Business?</h3>
          <p className="mb-6">
            Let our experienced team handle the entire process for you. We'll ensure compliance, minimize delays, 
            and get your business up and running as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              Start Your Application
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainlandBusinessLicense;