import React from 'react';
import { ArrowLeft, Globe, Users, Shield, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartingBusinessForeigner = () => {
  const navigate = useNavigate();

  const advantages = [
    {
      icon: Shield,
      title: "Political & Economic Stability",
      description: "UAE offers a stable political environment and robust economy"
    },
    {
      icon: TrendingUp,
      title: "Strategic Location",
      description: "Gateway between East and West, connecting global markets"
    },
    {
      icon: Users,
      title: "Diverse Workforce",
      description: "Access to skilled professionals from around the world"
    },
    {
      icon: Globe,
      title: "Business-Friendly Policies",
      description: "Progressive laws supporting foreign investment and entrepreneurship"
    }
  ];

  const businessTypes = [
    {
      type: "Sole Proprietorship",
      ownership: "100% Foreign",
      minCapital: "No minimum",
      liability: "Unlimited",
      suitability: "Small businesses, freelancers"
    },
    {
      type: "Limited Liability Company (LLC)",
      ownership: "100% Foreign (most sectors)",
      minCapital: "AED 300,000",
      liability: "Limited to share capital",
      suitability: "Most common choice for SMEs"
    },
    {
      type: "Free Zone Company",
      ownership: "100% Foreign",
      minCapital: "Varies by zone",
      liability: "Limited",
      suitability: "Export-oriented businesses"
    },
    {
      type: "Branch Office",
      ownership: "100% Foreign parent",
      minCapital: "AED 150,000",
      liability: "Parent company liable",
      suitability: "Established foreign companies"
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
            <Globe className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Foreign Investment
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Starting a Business in the UAE as a Foreigner
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            The UAE welcomes international investors with open arms, offering one of the world's most business-friendly environments. 
            Here's everything you need to know about starting your business journey in the Emirates.
          </p>
        </div>

        {/* Why Choose UAE */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Why Choose the UAE for Your Business?</h2>
          
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
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-blue-700">Nationalities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-blue-700">Free Zones</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">0%</div>
                <div className="text-sm text-blue-700">Personal Income Tax</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Structure Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Business Structure Options</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ownership
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Min. Capital
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Liability
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {businessTypes.map((business, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {business.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {business.ownership}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {business.minCapital}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {business.liability}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {business.suitability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Legal Requirements for Foreign Investors</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Must be 18 years or older</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Valid passport with minimum 6 months validity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Clean criminal record certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Proof of financial capability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Educational qualifications (for certain activities)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Restricted Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Oil and gas exploration</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Banking and insurance (requires special licensing)</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Telecommunications</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Military and security services</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Certain retail activities (location-dependent)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Getting Started: Your Action Plan</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Research & Business Plan</h3>
                <p className="text-gray-600">Conduct thorough market research and develop a comprehensive business plan tailored to the UAE market.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Business Structure & Location</h3>
                <p className="text-gray-600">Decide between mainland, free zone, or offshore setup based on your business needs and target market.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prepare Documentation</h3>
                <p className="text-gray-600">Gather and attest all required documents including passport, educational certificates, and financial statements.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit License Application</h3>
                <p className="text-gray-600">File your business license application with the relevant authorities and pay required fees.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Office Space & Open Bank Account</h3>
                <p className="text-gray-600">Obtain office space, open a corporate bank account, and complete final setup requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Challenges */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Common Challenges & How to Overcome Them</h3>
              <div className="space-y-3 text-yellow-700">
                <div>
                  <strong>Document Attestation:</strong> Ensure all foreign documents are properly attested by UAE Embassy in your home country before arrival.
                </div>
                <div>
                  <strong>Banking Requirements:</strong> Different banks have varying requirements. Research and prepare comprehensive documentation.
                </div>
                <div>
                  <strong>Cultural Adaptation:</strong> Understanding local business culture and practices is crucial for success.
                </div>
                <div>
                  <strong>Regulatory Compliance:</strong> Stay updated with changing regulations and ensure ongoing compliance.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Tips for Success</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-green-700">
              <li>• Build strong local partnerships and networks</li>
              <li>• Understand and respect local customs and traditions</li>
              <li>• Invest in learning basic Arabic phrases</li>
              <li>• Focus on quality and customer service excellence</li>
            </ul>
            <ul className="space-y-2 text-green-700">
              <li>• Leverage UAE's strategic location for regional expansion</li>
              <li>• Stay compliant with all regulatory requirements</li>
              <li>• Consider hiring local talent and expertise</li>
              <li>• Plan for long-term growth and scalability</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your UAE Business Journey?</h3>
          <p className="mb-6">
            Starting a business in the UAE as a foreigner has never been easier. Our expert team can guide you through 
            every step of the process, ensuring compliance and maximizing your chances of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              Get Expert Guidance
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingBusinessForeigner;