import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle, AlertTriangle, Calendar, FileText, DollarSign, XCircle, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface RenewalStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

interface ModificationStep {
  title: string;
  description: string;
  requirements: string[];
}

interface ClosureStep {
  step: number;
  title: string;
  description: string;
  requirements: string[];
}

const CompanyRenewalsClosures = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const renewalSteps = (t('blog.renewals.steps.items') || []) as RenewalStep[];
  const modificationTypes = (t('blog.renewals.modifications.items') || []) as ModificationStep[];
  const closureSteps = (t('blog.renewals.closure.steps') || []) as ClosureStep[];

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

  return (
    <BlogArticle
      icon={RefreshCw}
      category="blog.renewals.overview.category"
      titleKey="blog.renewals.overview.title"
      descriptionKey="blog.renewals.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </button>

        {/* License Renewals */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.renewals.renewal.title')}
          </h2>
          
          <div className="space-y-6">
            {renewalSteps.map((step, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200`}>
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

        {/* License Modifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.renewals.modifications.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modificationTypes.map((mod, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{mod.title}</h3>
                <p className="text-gray-600 mb-4">{mod.description}</p>
                <div className="space-y-2">
                  {mod.requirements.map((req: string, reqIndex: number) => (
                    <div key={reqIndex} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

        {/* Company Closure */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.renewals.closure.title')}
          </h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  {t('blog.renewals.closure.warning.title')}
                </h3>
                <p className="text-yellow-700">
                  {t('blog.renewals.closure.warning.description')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {closureSteps.map((step, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg`}>
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.requirements.map((req: string, reqIndex: number) => (
                      <div key={reqIndex} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
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
    </BlogArticle>
  );
};

export default CompanyRenewalsClosures;