import React from 'react';
import { ArrowLeft, BarChart3, CheckCircle, AlertTriangle, Search, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessActivitiesLicensing = () => {
  const navigate = useNavigate();

  const licenseTypes = [
    {
      type: "Commercial License",
      description: "For trading, import/export, and retail businesses",
      activities: ["General Trading", "Import/Export", "Retail Sales", "Wholesale Distribution"],
      color: "blue"
    },
    {
      type: "Professional License",
      description: "For service-based businesses and consultancies",
      activities: ["Legal Services", "Accounting", "Engineering", "Medical Services"],
      color: "green"
    },
    {
      type: "Industrial License",
      description: "For manufacturing and production activities",
      activities: ["Manufacturing", "Food Production", "Textile Production", "Chemical Processing"],
      color: "purple"
    },
    {
      type: "Tourism License",
      description: "For hospitality and tourism-related businesses",
      activities: ["Hotels", "Travel Agencies", "Tour Operations", "Event Management"],
      color: "orange"
    }
  ];

  const popularActivities = [
    { activity: "General Trading", code: "4690", description: "Non-specialized wholesale trade" },
    { activity: "Management Consultancy", code: "7020", description: "Management consulting activities" },
    { activity: "Information Technology", code: "6201", description: "Computer programming activities" },
    { activity: "Real Estate", code: "6810", description: "Real estate activities with own property" },
    { activity: "Marketing Services", code: "7310", description: "Advertising activities" },
    { activity: "Import/Export", code: "4690", description: "Specialized wholesale trade" }
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
            <BarChart3 className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Getting Started
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Activities & Licensing Categories Explained
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Before registering your company in the UAE, it's essential to choose the right business activity from the approved list. 
            This decision affects your license type, operational scope, and compliance requirements.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Understanding Business Activities</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              The UAE maintains a comprehensive list of approved business activities, each with a specific code and classification. 
              Your chosen activities determine not only what your business can legally do, but also:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">What It Affects</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• License type and category</li>
                  <li>• Government fees and costs</li>
                  <li>• Required approvals and permits</li>
                  <li>• Office space requirements</li>
                  <li>• Visa quota allocations</li>
                  <li>• Banking and insurance needs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Key Considerations</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Current and future business plans</li>
                  <li>• Target market and customers</li>
                  <li>• Required professional qualifications</li>
                  <li>• Capital requirements</li>
                  <li>• Regulatory compliance needs</li>
                  <li>• Expansion possibilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* License Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Main License Categories</h2>
          
          <div className="space-y-6">
            {licenseTypes.map((license, index) => (
              <div key={index} className={`border-l-4 border-${license.color}-500 bg-${license.color}-50 p-6 rounded-r-lg`}>
                <h3 className={`text-xl font-semibold text-${license.color}-800 mb-2`}>{license.type}</h3>
                <p className={`text-${license.color}-700 mb-4`}>{license.description}</p>
                <div className="flex flex-wrap gap-2">
                  {license.activities.map((activity, actIndex) => (
                    <span key={actIndex} className={`px-3 py-1 bg-${license.color}-100 text-${license.color}-800 rounded-full text-sm`}>
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Activities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Popular Business Activities</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {popularActivities.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.activity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">How to Choose the Right Activities</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Define Your Business Scope</h3>
                <p className="text-gray-600">Clearly outline what your business will do now and in the future. Consider all revenue streams and services you plan to offer.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Activity Codes</h3>
                <p className="text-gray-600">Use the official UAE business activity classification system to find codes that match your business operations.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Requirements</h3>
                <p className="text-gray-600">Verify any special requirements, qualifications, or approvals needed for your chosen activities.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan for Growth</h3>
                <p className="text-gray-600">Select activities that allow for business expansion without requiring license modifications later.</p>
              </div>
            </div>
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
                  <strong>Activity Limitations:</strong> You can only operate within your approved activities. Unauthorized activities can result in penalties.
                </div>
                <div>
                  <strong>Professional Activities:</strong> Some activities require specific qualifications, experience, or professional certifications.
                </div>
                <div>
                  <strong>Restricted Activities:</strong> Certain activities are restricted to UAE nationals or require special government approvals.
                </div>
                <div>
                  <strong>Multiple Activities:</strong> You can include multiple activities on one license, but each may have different requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6" />
            Common Mistakes to Avoid
          </h3>
          <ul className="space-y-2 text-red-700">
            <li>• Choosing too narrow activities that limit future growth</li>
            <li>• Selecting activities without understanding their requirements</li>
            <li>• Ignoring the need for professional qualifications</li>
            <li>• Not considering the target market and customer base</li>
            <li>• Overlooking additional approvals or permits required</li>
            <li>• Failing to plan for business expansion and diversification</li>
          </ul>
        </div>

        {/* Expert Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
            <CheckCircle className="mr-2 h-6 w-6" />
            Expert Tips for Success
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-green-700">
              <li>• Include complementary activities for flexibility</li>
              <li>• Research market demand for your chosen activities</li>
              <li>• Consider seasonal or cyclical business patterns</li>
              <li>• Plan for digital transformation and e-commerce</li>
            </ul>
            <ul className="space-y-2 text-green-700">
              <li>• Understand visa requirements for each activity</li>
              <li>• Factor in office space and location requirements</li>
              <li>• Consider partnership opportunities and restrictions</li>
              <li>• Plan for regulatory changes and updates</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Help Choosing the Right Activities?</h3>
          <p className="mb-6">
            Selecting the right business activities is crucial for your success in the UAE. Our experts can help you navigate 
            the complex classification system and choose activities that align with your business goals and growth plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Search className="mr-2 h-5 w-5" />
              Get Activity Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Activity Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessActivitiesLicensing;