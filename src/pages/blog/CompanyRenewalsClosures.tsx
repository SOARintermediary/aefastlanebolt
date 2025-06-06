import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle, AlertTriangle, Calendar, FileText, DollarSign, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyRenewalsClosures = () => {
  const navigate = useNavigate();

  const renewalSteps = [
    {
      step: 1,
      title: "Pre-Renewal Assessment",
      description: "Review current license status and upcoming renewal requirements",
      timeline: "60 days before expiry",
      actions: ["License status check", "Document review", "Compliance assessment"]
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Gather and prepare all required documents for renewal",
      timeline: "45 days before expiry",
      actions: ["Financial statements", "Audit reports", "Updated MOA", "Passport copies"]
    },
    {
      step: 3,
      title: "Fee Payment",
      description: "Calculate and pay all renewal fees and government charges",
      timeline: "30 days before expiry",
      actions: ["Fee calculation", "Payment processing", "Receipt collection"]
    },
    {
      step: 4,
      title: "Submission & Processing",
      description: "Submit renewal application and track processing status",
      timeline: "15 days before expiry",
      actions: ["Application submission", "Status tracking", "Follow-up with authorities"]
    },
    {
      step: 5,
      title: "License Collection",
      description: "Collect renewed license and update all records",
      timeline: "Upon approval",
      actions: ["License collection", "Record updates", "Stakeholder notification"]
    }
  ];

  const renewalTypes = [
    {
      type: "Trade License Renewal",
      frequency: "Annual",
      cost: "AED 1,200 - 15,000",
      requirements: ["Financial statements", "Audit report", "Lease agreement"],
      penalties: "10% late fee after 30 days"
    },
    {
      type: "Visa Renewal",
      frequency: "1-3 Years",
      cost: "AED 1,000 - 5,000",
      requirements: ["Medical certificate", "Emirates ID", "Salary certificate"],
      penalties: "AED 100/day overstay fine"
    },
    {
      type: "Professional License",
      frequency: "Annual",
      cost: "AED 2,000 - 10,000",
      requirements: ["Professional certificates", "Experience letters", "NOC"],
      penalties: "License suspension risk"
    },
    {
      type: "Free Zone License",
      frequency: "Annual",
      cost: "AED 8,000 - 25,000",
      requirements: ["Activity report", "Financial statements", "Office lease"],
      penalties: "Grace period varies by zone"
    }
  ];

  const closureReasons = [
    {
      reason: "Business Restructuring",
      description: "Merging with another entity or changing business structure",
      process: "Voluntary closure with asset transfer"
    },
    {
      reason: "End of Business Operations",
      description: "Ceasing all business activities permanently",
      process: "Complete liquidation and closure"
    },
    {
      reason: "Relocation",
      description: "Moving business to another jurisdiction",
      process: "Closure with potential re-establishment"
    },
    {
      reason: "Non-Compliance",
      description: "Failure to meet regulatory requirements",
      process: "Forced closure by authorities"
    }
  ];

  const closureSteps = [
    {
      step: 1,
      title: "Board Resolution",
      description: "Pass board resolution to close the company",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Settle Obligations",
      description: "Clear all debts, liabilities, and employee obligations",
      duration: "2-4 weeks"
    },
    {
      step: 3,
      title: "Cancel Licenses",
      description: "Cancel all business licenses and permits",
      duration: "1-2 weeks"
    },
    {
      step: 4,
      title: "Bank Account Closure",
      description: "Close all corporate bank accounts",
      duration: "1-2 weeks"
    },
    {
      step: 5,
      title: "Final Approvals",
      description: "Obtain final closure approvals from authorities",
      duration: "2-3 weeks"
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
            <RefreshCw className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Operations & Compliance
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding UAE Company Renewals, Modifications & Closures
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Businesses must stay compliant with UAE regulations by renewing their licenses on time, making necessary modifications, 
            and following proper procedures for closure when needed. This guide covers all essential processes.
          </p>
        </div>

        {/* License Renewals Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">License Renewal Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {renewalTypes.map((renewal, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{renewal.type}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">{renewal.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Range:</span>
                    <span className="font-medium">{renewal.cost}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-gray-600 block mb-2">Requirements:</span>
                    <ul className="space-y-1">
                      {renewal.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 p-2 bg-red-50 rounded">
                    <span className="text-red-700 text-xs">
                      <strong>Late Penalty:</strong> {renewal.penalties}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renewal Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Step-by-Step Renewal Process</h2>
          
          <div className="space-y-6">
            {renewalSteps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Calendar className="w-3 h-3 mr-1" />
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="grid md:grid-cols-3 gap-2">
                      {step.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Modifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Common Business Modifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">License Modifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Activity Addition/Removal</span>
                    <p className="text-sm text-gray-600">Adding or removing business activities from your license</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Company Name Change</span>
                    <p className="text-sm text-gray-600">Modifying your registered company name</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Share Capital Increase</span>
                    <p className="text-sm text-gray-600">Increasing authorized or paid-up capital</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Changes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Office Relocation</span>
                    <p className="text-sm text-gray-600">Moving to a new business address</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Partner Changes</span>
                    <p className="text-sm text-gray-600">Adding, removing, or changing partners</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Manager Appointment</span>
                    <p className="text-sm text-gray-600">Appointing new managers or signatories</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Closure */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Company Closure Process</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Reasons for Closure</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {closureReasons.map((reason, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{reason.reason}</h4>
                  <p className="text-sm text-gray-600 mb-2">{reason.description}</p>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {reason.process}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Closure Steps</h3>
          <div className="space-y-4">
            {closureSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <span className="text-xs text-gray-500">{step.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Considerations</h3>
              <div className="space-y-3 text-yellow-700">
                <div>
                  <strong>Renewal Timing:</strong> Start the renewal process at least 60 days before license expiry to avoid penalties and business disruption.
                </div>
                <div>
                  <strong>Compliance Requirements:</strong> Ensure all regulatory filings are up to date before attempting renewals or modifications.
                </div>
                <div>
                  <strong>Financial Obligations:</strong> Clear all outstanding fees, fines, and obligations before closure proceedings.
                </div>
                <div>
                  <strong>Employee Rights:</strong> Properly settle all employee entitlements and follow labor law requirements during closure.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Considerations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Cost Considerations</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Government Fees
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Professional Fees
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Estimate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">License Renewal</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,200 - 15,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,000 - 3,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,200 - 18,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">License Modification</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">500 - 5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,500 - 4,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">2,000 - 9,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Company Closure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">1,000 - 3,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">5,000 - 15,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">6,000 - 18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            * All amounts in AED. Costs vary based on company type, complexity, and specific requirements.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Help with Renewals, Modifications, or Closures?</h3>
          <p className="mb-6">
            Our experienced team can handle all aspects of company renewals, modifications, and closures. 
            We ensure compliance with all regulations and minimize disruption to your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Get Renewal Support
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRenewalsClosures;