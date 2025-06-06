import React from 'react';
import { ArrowLeft, Settings, CheckCircle, Clock, Users, FileText, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GovernmentApprovalsStreamlined = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: "Document Preparation",
      description: "Complete preparation and attestation of all required documents",
      benefits: ["Professional document review", "Attestation coordination", "Translation services", "Compliance verification"]
    },
    {
      icon: Users,
      title: "Government Liaison",
      description: "Direct communication with government departments on your behalf",
      benefits: ["Dedicated PRO officers", "Direct government contacts", "Status updates", "Issue resolution"]
    },
    {
      icon: Clock,
      title: "Process Acceleration",
      description: "Expedited processing through established relationships and expertise",
      benefits: ["Priority processing", "Reduced waiting times", "Efficient workflows", "Quick turnarounds"]
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Ensuring all procedures meet current regulatory requirements",
      benefits: ["Regulatory expertise", "Compliance monitoring", "Risk mitigation", "Legal protection"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your requirements and create a customized action plan",
      duration: "Same day"
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Our team gathers all necessary documents and information",
      duration: "1-2 days"
    },
    {
      step: 3,
      title: "Preparation & Review",
      description: "Professional preparation and thorough review of all documentation",
      duration: "2-3 days"
    },
    {
      step: 4,
      title: "Government Submission",
      description: "Strategic submission to relevant government departments",
      duration: "1 day"
    },
    {
      step: 5,
      title: "Follow-up & Tracking",
      description: "Continuous monitoring and follow-up until completion",
      duration: "Ongoing"
    },
    {
      step: 6,
      title: "Completion & Delivery",
      description: "Final approvals obtained and documents delivered to you",
      duration: "As per timeline"
    }
  ];

  const governmentDepartments = [
    {
      department: "Department of Economic Development (DED)",
      services: ["Trade license applications", "License renewals", "Business modifications"],
      expertise: "Complete DED procedures and requirements"
    },
    {
      department: "General Directorate of Residency (GDRFA)",
      services: ["Visa applications", "Residence permits", "Entry permits"],
      expertise: "Immigration and visa processing"
    },
    {
      department: "Ministry of Human Resources (MOHRE)",
      services: ["Work permits", "Labor contracts", "Employment visas"],
      expertise: "Employment and labor procedures"
    },
    {
      department: "Dubai Municipality",
      services: ["Health permits", "Food licenses", "Environmental approvals"],
      expertise: "Municipal permits and approvals"
    },
    {
      department: "Free Zone Authorities",
      services: ["Free zone licenses", "Permits", "Renewals"],
      expertise: "All major free zone procedures"
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      stat: "50% Faster",
      description: "Our established relationships and expertise significantly reduce processing times"
    },
    {
      icon: CheckCircle,
      title: "Success Rate",
      stat: "99.8%",
      description: "Exceptional approval success rate through meticulous preparation and compliance"
    },
    {
      icon: Users,
      title: "Expert Team",
      stat: "15+ Years",
      description: "Experienced PRO officers with deep knowledge of UAE government procedures"
    },
    {
      icon: Shield,
      title: "Compliance",
      stat: "100%",
      description: "Full compliance with all current regulations and requirements"
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
            <Settings className="h-8 w-8 text-primary mr-3" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Operations & Compliance
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How AEFastLane Streamlines Government Approvals & Documentation
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Handling government paperwork can be complex and time-consuming. At AEFastLane, we manage every step on your behalf, 
            ensuring fast, accurate, and compliant processing of all your government-related procedures.
          </p>
        </div>

        {/* Key Advantages */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Why Choose AEFastLane for Government Procedures</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200">
                <advantage.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{advantage.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Comprehensive PRO Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
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

        {/* Our Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Streamlined Process</h2>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
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

        {/* Government Departments */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Government Departments We Work With</h2>
          
          <div className="space-y-6">
            {governmentDepartments.map((dept, index) => (
              <div key={index} className="border-l-4 border-primary bg-gray-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.department}</h3>
                <p className="text-gray-600 mb-3">{dept.expertise}</p>
                <div className="flex flex-wrap gap-2">
                  {dept.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">What Sets AEFastLane Apart</h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Deep Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 15+ years of UAE government procedure experience</li>
                  <li>• Certified PRO officers with specialized training</li>
                  <li>• Continuous updates on regulatory changes</li>
                  <li>• Multilingual team for diverse client needs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Established Relationships</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Direct contacts in all major government departments</li>
                  <li>• Preferred partner status with key authorities</li>
                  <li>• Priority processing arrangements</li>
                  <li>• Streamlined communication channels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Digital document management systems</li>
                  <li>• Real-time status tracking and updates</li>
                  <li>• Automated compliance checking</li>
                  <li>• Electronic submission capabilities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Client-Centric Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dedicated account managers</li>
                  <li>• Regular progress updates and communication</li>
                  <li>• Transparent pricing with no hidden fees</li>
                  <li>• 24/7 support for urgent matters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Procedures */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Most Common Procedures We Handle</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Business Setup</h4>
              <ul className="space-y-1 text-blue-600 text-sm">
                <li>• Trade license applications</li>
                <li>• Company registration</li>
                <li>• Bank account opening</li>
                <li>• Office lease agreements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Visa Services</h4>
              <ul className="space-y-1 text-blue-600 text-sm">
                <li>• Employment visa processing</li>
                <li>• Family visa applications</li>
                <li>• Golden visa assistance</li>
                <li>• Visa renewals and cancellations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Ongoing Compliance</h4>
              <ul className="space-y-1 text-blue-600 text-sm">
                <li>• License renewals</li>
                <li>• Business modifications</li>
                <li>• Permit applications</li>
                <li>• Regulatory filings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Client Success Stories</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-green-700 italic mb-2">
                "AEFastLane reduced our license processing time from 6 weeks to just 10 days. Their expertise and government relationships made all the difference."
              </p>
              <p className="text-green-600 text-sm">- Tech Startup, DIFC</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-green-700 italic mb-2">
                "The team handled our complex visa requirements seamlessly. We couldn't have navigated the process without their professional support."
              </p>
              <p className="text-green-600 text-sm">- Manufacturing Company, Dubai</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Let Us Handle Your Government Procedures</h3>
          <p className="mb-6">
            Stop wasting time on complex government procedures. Our expert PRO team will handle everything for you, 
            ensuring fast, accurate, and compliant processing of all your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Settings className="mr-2 h-5 w-5" />
              Get PRO Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentApprovalsStreamlined;