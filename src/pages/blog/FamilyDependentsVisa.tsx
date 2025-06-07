import React from 'react';
import { ArrowLeft, Users, CheckCircle, Heart, Home, GraduationCap, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FamilyDependentsVisa = () => {
  const navigate = useNavigate();

  const eligibleDependents = [
    {
      type: "Spouse",
      icon: Heart,
      requirements: ["Legally married", "Marriage certificate attested", "Minimum salary AED 4,000", "Suitable accommodation"],
      duration: "Same as sponsor's visa",
      benefits: ["Work permit eligible", "Healthcare access", "Education for children", "Travel freedom"],
      color: "pink"
    },
    {
      type: "Children",
      icon: GraduationCap,
      requirements: ["Under 18 years", "Birth certificate", "Sponsor's salary AED 4,000+", "School enrollment"],
      duration: "Until 18 or marriage",
      benefits: ["Education access", "Healthcare coverage", "Residence permit", "Family unity"],
      color: "blue"
    },
    {
      type: "Parents",
      icon: Home,
      requirements: ["Above 60 years", "Sponsor's salary AED 20,000+", "Health insurance", "Accommodation proof"],
      duration: "1 year renewable",
      benefits: ["Healthcare access", "Family reunion", "Residence permit", "Support services"],
      color: "green"
    },
    {
      type: "Domestic Workers",
      icon: Users,
      requirements: ["Employment contract", "Sponsor's salary AED 10,000+", "Suitable accommodation", "Medical certificate"],
      duration: "As per contract",
      benefits: ["Work authorization", "Residence permit", "Healthcare access", "Legal protection"],
      color: "purple"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Eligibility Check",
      description: "Verify salary requirements and relationship documentation",
      duration: "1 day",
      requirements: ["Salary certificate", "Relationship proof", "Accommodation details"]
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Gather and attest all required documents",
      duration: "1-2 weeks",
      requirements: ["Attested certificates", "Passport copies", "Medical certificates", "Photos"]
    },
    {
      step: 3,
      title: "Entry Permit Application",
      description: "Apply for entry permit for family members",
      duration: "3-5 days",
      requirements: ["Application form", "Supporting documents", "Fee payment"]
    },
    {
      step: 4,
      title: "Medical Examination",
      description: "Complete medical tests at approved centers",
      duration: "1-2 days",
      requirements: ["Entry permit", "Passport", "Medical form"]
    },
    {
      step: 5,
      title: "Visa Stamping",
      description: "Get residence visa stamped in passport",
      duration: "2-3 days",
      requirements: ["Medical certificate", "Entry permit", "Passport", "Fees"]
    },
    {
      step: 6,
      title: "Emirates ID",
      description: "Apply for Emirates ID for family members",
      duration: "7-14 days",
      requirements: ["Residence visa", "Passport photos", "Application form"]
    }
  ];

  const salaryRequirements = [
    {
      dependents: "Spouse only",
      minSalary: "AED 4,000",
      accommodation: "1-bedroom apartment",
      additionalNotes: "Basic family sponsorship"
    },
    {
      dependents: "Spouse + 1 child",
      minSalary: "AED 5,000",
      accommodation: "2-bedroom apartment",
      additionalNotes: "School fees consideration"
    },
    {
      dependents: "Spouse + 2 children",
      minSalary: "AED 6,000",
      accommodation: "2-3 bedroom apartment",
      additionalNotes: "Education and healthcare costs"
    },
    {
      dependents: "Parents (above 60)",
      minSalary: "AED 20,000",
      accommodation: "Suitable family accommodation",
      additionalNotes: "Health insurance mandatory"
    }
  ];

  const documentChecklist = [
    {
      category: "Sponsor Documents",
      documents: [
        "Passport copy with residence visa",
        "Emirates ID copy",
        "Salary certificate (attested)",
        "Employment contract",
        "Bank statements (6 months)",
        "Tenancy contract"
      ]
    },
    {
      category: "Dependent Documents",
      documents: [
        "Passport with 6+ months validity",
        "Passport-size photographs",
        "Birth certificate (for children)",
        "Marriage certificate (for spouse)",
        "Educational certificates",
        "Medical certificate"
      ]
    },
    {
      category: "Relationship Proof",
      documents: [
        "Marriage certificate (attested)",
        "Birth certificates (attested)",
        "Family book or equivalent",
        "Adoption papers (if applicable)",
        "Divorce decree (if applicable)",
        "Death certificate (if applicable)"
      ]
    }
  ];

  const costBreakdown = [
    {
      service: "Entry Permit (Spouse)",
      government: 1190,
      service: 500,
      total: 1690
    },
    {
      service: "Entry Permit (Child)",
      government: 1190,
      service: 500,
      total: 1690
    },
    {
      service: "Medical Examination",
      government: 310,
      service: 200,
      total: 510
    },
    {
      service: "Visa Stamping",
      government: 580,
      service: 300,
      total: 880
    },
    {
      service: "Emirates ID",
      government: 380,
      service: 150,
      total: 530
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
            <Users className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Visa & Immigration
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Family and Dependents Visa Sponsorship Made Easy
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Want to bring your family to the UAE? AEFastLane can help you sponsor your dependents smoothly, 
            ensuring all requirements are met for a successful family reunion in the Emirates.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Family Sponsorship Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Who Can Sponsor</h3>
              <p className="text-blue-600">UAE Residents with valid visa</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Family Members</h3>
              <p className="text-green-600">Spouse, children, parents</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">Min. Salary</h3>
              <p className="text-purple-600">From AED 4,000</p>
            </div>
          </div>
        </div>

        {/* Eligible Dependents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Who Can You Sponsor?</h2>
          
          <div className="space-y-6">
            {eligibleDependents.map((dependent, index) => (
              <div key={index} className={`border-l-4 border-${dependent.color}-500 bg-${dependent.color}-50 p-6 rounded-r-lg`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <dependent.icon className={`h-8 w-8 text-${dependent.color}-600 mr-3`} />
                    <div>
                      <h3 className={`text-xl font-semibold text-${dependent.color}-800`}>{dependent.type}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${dependent.color}-100 text-${dependent.color}-800 mt-1`}>
                        <Clock className="w-3 h-3 mr-1" />
                        {dependent.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold text-${dependent.color}-800 mb-2`}>Requirements</h4>
                    <ul className="space-y-1">
                      {dependent.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className={`flex items-start text-${dependent.color}-700 text-sm`}>
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-${dependent.color}-800 mb-2`}>Benefits</h4>
                    <ul className="space-y-1">
                      {dependent.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-center text-${dependent.color}-700 text-sm`}>
                          <CheckCircle className="h-4 w-4 mr-2" />
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

        {/* Salary Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Salary Requirements</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Family Composition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Minimum Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Accommodation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {salaryRequirements.map((requirement, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {requirement.dependents}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {requirement.minSalary}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {requirement.accommodation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {requirement.additionalNotes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    {step.requirements.map((requirement, reqIndex) => (
                      <span key={reqIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {requirement}
                      </span>
                    ))}
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
                {costBreakdown.map((cost, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cost.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{cost.government.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{cost.service.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{cost.total.toLocaleString()}</td>
                  </tr>
                ))}
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
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Considerations</h3>
              <div className="space-y-2 text-yellow-700">
                <div>• All foreign documents must be attested by UAE Embassy in country of origin</div>
                <div>• Sponsor must maintain minimum salary throughout visa validity</div>
                <div>• Suitable accommodation must be maintained for family members</div>
                <div>• Health insurance is recommended for all family members</div>
                <div>• Children's education costs should be factored into budget planning</div>
                <div>• Family visa renewal depends on sponsor's visa status</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Tips for Successful Family Sponsorship</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-green-700">
              <li>• Ensure salary meets requirements consistently</li>
              <li>• Prepare all documents well in advance</li>
              <li>• Consider health insurance for family members</li>
              <li>• Plan for education costs if sponsoring children</li>
            </ul>
            <ul className="space-y-2 text-green-700">
              <li>• Maintain proper accommodation standards</li>
              <li>• Keep all documents updated and valid</li>
              <li>• Use professional services for complex cases</li>
              <li>• Plan renewal process in advance</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Bring Your Family to the UAE?</h3>
          <p className="mb-6">
            Our family visa specialists can handle the entire sponsorship process for you, ensuring all requirements are met 
            and your family reunion happens smoothly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Start Family Sponsorship
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Heart className="mr-2 h-5 w-5" />
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDependentsVisa;