import React from 'react';
import { ArrowLeft, Building2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FreeZoneVsMainland = () => {
  const navigate = useNavigate();

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
              Business Setup
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Zone vs Mainland: Which is Right for Your UAE Business?
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            When starting a business in the UAE, one of the first decisions you'll face is whether to set up in a free zone or on the mainland. This choice will significantly impact your business operations, ownership structure, and growth potential.
          </p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Understanding the Basics</h2>
            
            <p className="mb-6">
              The UAE offers two primary business setup options: <strong>Free Zones</strong> and <strong>Mainland</strong> companies. Each has distinct advantages and limitations that can make or break your business strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Free Zone Companies
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>• 100% foreign ownership</li>
                  <li>• No corporate tax (in most zones)</li>
                  <li>• No personal income tax</li>
                  <li>• Full profit repatriation</li>
                  <li>• Streamlined setup process</li>
                  <li>• No currency restrictions</li>
                </ul>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Building2 className="mr-2 h-6 w-6" />
                  Mainland Companies
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Access to UAE domestic market</li>
                  <li>• Can trade with government entities</li>
                  <li>• Wider range of business activities</li>
                  <li>• Can have offices anywhere in UAE</li>
                  <li>• Direct import/export capabilities</li>
                  <li>• No restrictions on business location</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Differences Breakdown</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aspect
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Free Zone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mainland
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Ownership
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      100% foreign ownership
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      100% foreign ownership (since 2021)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Market Access
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                      Limited to free zone and export
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      Full UAE market access
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Office Location
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                      Must be within the free zone
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      Anywhere in the emirate
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Visa Quota
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      Based on office size/license
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      Based on business activity
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Consideration</h3>
                  <p className="text-yellow-700">
                    Recent changes in UAE law now allow 100% foreign ownership for mainland companies in most sectors, 
                    making this option more attractive than ever before. However, some strategic sectors still require local partnership.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Which Option Should You Choose?</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Free Zone If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Your business is primarily export-oriented</li>
                  <li>• You want to minimize setup complexity and time</li>
                  <li>• Tax optimization is a priority</li>
                  <li>• You're in tech, media, or specialized industries</li>
                  <li>• You don't need to access the UAE domestic market immediately</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Mainland If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• You want to serve the UAE domestic market</li>
                  <li>• You plan to work with government entities</li>
                  <li>• You need flexibility in office location</li>
                  <li>• Your business requires extensive local partnerships</li>
                  <li>• You're in retail, hospitality, or service industries</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Popular Free Zones to Consider</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">DMCC</h4>
                <p className="text-sm text-gray-600">Dubai's premier free zone for commodities and trading</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">DIFC</h4>
                <p className="text-sm text-gray-600">Financial services and fintech hub</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">RAKEZ</h4>
                <p className="text-sm text-gray-600">Cost-effective option with flexible packages</p>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Need Expert Guidance?</h3>
              <p className="mb-4">
                Choosing between free zone and mainland setup is a crucial decision that depends on your specific business model, 
                target market, and long-term goals. Our experts can help you analyze your requirements and make the right choice.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeZoneVsMainland;