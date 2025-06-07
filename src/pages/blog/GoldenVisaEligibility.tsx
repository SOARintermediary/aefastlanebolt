import React from 'react';
import { ArrowLeft, Star, CheckCircle, DollarSign, Users, Building2, GraduationCap, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoldenVisaEligibility = () => {
  const navigate = useNavigate();

  const eligibilityCategories = [
    {
      category: "Investors",
      icon: DollarSign,
      duration: "10 Years",
      requirements: [
        "Invest AED 10 million in public investment fund",
        "Invest AED 10 million in UAE company (51% UAE ownership)",
        "Establish company with AED 10 million capital",
        "Partner in existing company worth AED 10 million"
      ],
      benefits: ["No sponsor required", "Multiple entry visa", "Sponsor family members", "Work permit included"],
      color: "green"
    },
    {
      category: "Entrepreneurs",
      icon: Building2,
      duration: "5 Years",
      requirements: [
        "Own project with AED 500,000 minimum value",
        "Approval from UAE incubator or accelerator",
        "Previous project sold for AED 7 million minimum",
        "Founder of startup with AED 500,000 funding"
      ],
      benefits: ["Business operation rights", "Family sponsorship", "Renewable visa", "Investment opportunities"],
      color: "blue"
    },
    {
      category: "Specialized Talents",
      icon: Award,
      duration: "10 Years",
      requirements: [
        "Doctors and specialists in priority fields",
        "Scientists and researchers",
        "Creative individuals in culture and arts",
        "Inventors with valuable patents"
      ],
      benefits: ["Professional practice rights", "Research opportunities", "Cultural contributions", "Innovation support"],
      color: "purple"
    },
    {
      category: "Outstanding Students",
      icon: GraduationCap,
      duration: "5 Years",
      requirements: [
        "Top graduates from UAE universities (GPA 3.75+)",
        "Graduates from top 100 world universities",
        "Outstanding students in secondary schools",
        "Students with exceptional achievements"
      ],
      benefits: ["Study and work rights", "Career opportunities", "Family sponsorship", "Academic support"],
      color: "orange"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Eligibility Assessment",
      description: "Determine which Golden Visa category you qualify for",
      duration: "1-2 days",
      documents: ["Qualification certificates", "Investment proofs", "Professional credentials"]
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Gather and attest all required documents",
      duration: "1-2 weeks",
      documents: ["Passport copies", "Educational certificates", "Financial statements", "Medical certificates"]
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit application through official channels",
      duration: "1 day",
      documents: ["Complete application form", "Supporting documents", "Fee payment", "Biometric data"]
    },
    {
      step: 4,
      title: "Review & Verification",
      description: "Authorities review application and verify credentials",
      duration: "30-60 days",
      documents: ["Background checks", "Credential verification", "Investment validation"]
    },
    {
      step: 5,
      title: "Approval & Issuance",
      description: "Receive Golden Visa approval and visa stamping",
      duration: "5-10 days",
      documents: ["Approval letter", "Visa stamping", "Emirates ID application"]
    }
  ];

  const investmentOptions = [
    {
      type: "Real Estate Investment",
      amount: "AED 2 million",
      duration: "5 years",
      conditions: ["Property value minimum AED 2 million", "Loan maximum 70%", "Property retained for 3 years"],
      benefits: ["Rental income", "Property appreciation", "Residency for family"]
    },
    {
      type: "Business Investment",
      amount: "AED 10 million",
      duration: "10 years",
      conditions: ["Establish new company", "51% UAE national ownership", "Create employment opportunities"],
      benefits: ["Business ownership", "Long-term residency", "Economic contribution"]
    },
    {
      type: "Investment Fund",
      amount: "AED 10 million",
      duration: "10 years",
      conditions: ["Invest in approved fund", "Minimum 3-year commitment", "Fund focused on UAE economy"],
      benefits: ["Professional management", "Diversified portfolio", "Economic participation"]
    }
  ];

  const familySponsorship = [
    {
      relation: "Spouse",
      eligibility: "Legally married",
      duration: "Same as main applicant",
      requirements: ["Marriage certificate", "Passport copy", "Medical certificate"]
    },
    {
      relation: "Children",
      eligibility: "Under 18 or studying",
      duration: "Until 18 or graduation",
      requirements: ["Birth certificate", "School enrollment", "Medical certificate"]
    },
    {
      relation: "Parents",
      eligibility: "Above 60 years",
      duration: "1 year renewable",
      requirements: ["Birth certificate", "Passport copy", "Health insurance"]
    },
    {
      relation: "Domestic Workers",
      eligibility: "Household staff",
      duration: "As per contract",
      requirements: ["Employment contract", "Salary certificate", "Medical certificate"]
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
            <Star className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Visa & Immigration
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Golden Visa Eligibility & Application Process Explained
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            The UAE's Golden Visa offers long-term residency to investors, entrepreneurs, and professionals. 
            This comprehensive guide explains eligibility criteria, application process, and benefits of this prestigious visa program.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Golden Visa Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-semibold text-yellow-800">Duration</h3>
              <p className="text-yellow-600">5-10 Years</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Family Inclusion</h3>
              <p className="text-green-600">Spouse & Children</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Renewable</h3>
              <p className="text-blue-600">Automatic Renewal</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-700">
                <li>• Long-term residency (5-10 years)</li>
                <li>• No sponsor required</li>
                <li>• Multiple entry visa</li>
                <li>• Family sponsorship rights</li>
              </ul>
              <ul className="space-y-2 text-yellow-700">
                <li>• Work permit included</li>
                <li>• Study permit for children</li>
                <li>• 100% business ownership</li>
                <li>• Automatic renewal eligibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Eligibility Categories</h2>
          
          <div className="space-y-6">
            {eligibilityCategories.map((category, index) => (
              <div key={index} className={`border-l-4 border-${category.color}-500 bg-${category.color}-50 p-6 rounded-r-lg`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <category.icon className={`h-8 w-8 text-${category.color}-600 mr-3`} />
                    <div>
                      <h3 className={`text-xl font-semibold text-${category.color}-800`}>{category.category}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${category.color}-100 text-${category.color}-800 mt-1`}>
                        <Clock className="w-3 h-3 mr-1" />
                        {category.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold text-${category.color}-800 mb-2`}>Requirements</h4>
                    <ul className="space-y-1">
                      {category.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className={`flex items-start text-${category.color}-700 text-sm`}>
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-${category.color}-800 mb-2`}>Benefits</h4>
                    <ul className="space-y-1">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-center text-${category.color}-700 text-sm`}>
                          <Star className="h-4 w-4 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Investment Options for Golden Visa</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {investmentOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">{option.amount}</div>
                  <div className="text-sm text-gray-600">Minimum Investment</div>
                </div>
                <div className="mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {option.duration} visa
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Conditions</h4>
                  <ul className="space-y-1">
                    {option.conditions.map((condition, condIndex) => (
                      <li key={condIndex} className="text-xs text-gray-600">
                        • {condition}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Application Process</h2>
          
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
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.documents.map((document, docIndex) => (
                      <span key={docIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {document}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Sponsorship */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Family Sponsorship Options</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Family Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Eligibility
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Key Requirements
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {familySponsorship.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {member.relation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {member.eligibility}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {member.duration}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.requirements.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Tips for Successful Application</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-green-700">
              <li>• Ensure all documents are properly attested</li>
              <li>• Meet minimum investment requirements clearly</li>
              <li>• Provide comprehensive financial documentation</li>
              <li>• Demonstrate genuine commitment to UAE</li>
            </ul>
            <ul className="space-y-2 text-green-700">
              <li>• Use professional services for complex cases</li>
              <li>• Maintain clean criminal record</li>
              <li>• Prepare detailed business plans if applicable</li>
              <li>• Allow sufficient time for processing</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Apply for Golden Visa?</h3>
          <p className="mb-6">
            Our Golden Visa specialists can assess your eligibility and guide you through the entire application process. 
            We ensure all requirements are met and maximize your chances of approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Star className="mr-2 h-5 w-5" />
              Check Eligibility
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

export default GoldenVisaEligibility;