import React from 'react';
import { ArrowLeft, Users, CheckCircle, Heart, Home, GraduationCap, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface Dependent {
  type: string;
  icon: React.FC<any>;
  requirements: string[];
  duration: string;
  benefits: string[];
  color: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface SalaryRequirement {
  dependents: string;
  minSalary: string;
  accommodation: string;
  additionalNotes: string;
}

interface DocumentCategory {
  category: string;
  documents: string[];
}

interface CostItem {
  service: string;
  government: number;
  serviceFee: number;
  total: number;
}

const FamilyDependentsVisa = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const eligibleDependents: Dependent[] = [
    {
      type: t('blog.familyVisa.dependents.spouse.type'),
      icon: Heart,
      requirements: JSON.parse(t('blog.familyVisa.dependents.spouse.requirements')),
      duration: t('blog.familyVisa.dependents.spouse.duration'),
      benefits: JSON.parse(t('blog.familyVisa.dependents.spouse.benefits')),
      color: "pink"
    },
    {
      type: t('blog.familyVisa.dependents.children.type'),
      icon: GraduationCap,
      requirements: JSON.parse(t('blog.familyVisa.dependents.children.requirements')),
      duration: t('blog.familyVisa.dependents.children.duration'),
      benefits: JSON.parse(t('blog.familyVisa.dependents.children.benefits')),
      color: "blue"
    },
    {
      type: t('blog.familyVisa.dependents.parents.type'),
      icon: Home,
      requirements: JSON.parse(t('blog.familyVisa.dependents.parents.requirements')),
      duration: t('blog.familyVisa.dependents.parents.duration'),
      benefits: JSON.parse(t('blog.familyVisa.dependents.parents.benefits')),
      color: "green"
    },
    {
      type: t('blog.familyVisa.dependents.workers.type'),
      icon: Users,
      requirements: JSON.parse(t('blog.familyVisa.dependents.workers.requirements')),
      duration: t('blog.familyVisa.dependents.workers.duration'),
      benefits: JSON.parse(t('blog.familyVisa.dependents.workers.benefits')),
      color: "purple"
    }
  ];

  const applicationProcess = JSON.parse(t('blog.familyVisa.process.steps')) as ProcessStep[];
  const salaryRequirements = JSON.parse(t('blog.familyVisa.salary.requirements')) as SalaryRequirement[];
  const documentChecklist = JSON.parse(t('blog.familyVisa.documents.categories')) as DocumentCategory[];
  const costBreakdown = JSON.parse(t('blog.familyVisa.costs.items')) as CostItem[];
  const importantNotes = JSON.parse(t('blog.familyVisa.notes.items')) as string[];
  const successTips = JSON.parse(t('blog.familyVisa.tips.items')) as string[];

  return (
    <div className={`py-24 bg-gray-50 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
        >
          <ArrowLeft className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {isRTL ? 'العودة إلى المدونة' : 'Back to Blog'}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Users className={`h-8 w-8 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t('blog.familyVisa.overview.category')}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blog.familyVisa.overview.title')}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('blog.familyVisa.overview.description')}
          </p>
        </div>

        {/* Eligible Dependents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('blog.familyVisa.dependents.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {eligibleDependents.map((dependent, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  dependent.color === "pink" ? "border-pink-200 bg-pink-50" :
                  dependent.color === "blue" ? "border-blue-200 bg-blue-50" :
                  dependent.color === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}
              >
                <div className="flex items-center mb-4">
                  <dependent.icon className={`h-6 w-6 ${
                    dependent.color === "pink" ? "text-pink-600" :
                    dependent.color === "blue" ? "text-blue-600" :
                    dependent.color === "green" ? "text-green-600" :
                    "text-purple-600"
                  } ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <h3 className="text-lg font-semibold">{dependent.type}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">{isRTL ? 'المتطلبات:' : 'Requirements:'}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {dependent.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">{isRTL ? 'المدة:' : 'Duration:'}</p>
                    <p>{dependent.duration}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">{isRTL ? 'المزايا:' : 'Benefits:'}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {dependent.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('blog.familyVisa.process.title')}
          </h2>
          <div className="space-y-6">
            {applicationProcess.map((step, index) => (
              <div key={index} className="flex">
                <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className={`h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {step.duration}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {step.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('blog.familyVisa.salary.title')}
          </h2>
          <div className="grid gap-6">
            {salaryRequirements.map((req, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{req.dependents}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium mb-1">{isRTL ? 'الحد الأدنى للراتب:' : 'Minimum Salary:'}</p>
                    <p className="text-primary">{req.minSalary}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{isRTL ? 'السكن:' : 'Accommodation:'}</p>
                    <p>{req.accommodation}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{isRTL ? 'ملاحظات إضافية:' : 'Additional Notes:'}</p>
                    <p>{req.additionalNotes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('blog.familyVisa.documents.title')}
          </h2>
          <div className="space-y-6">
            {documentChecklist.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {category.documents.map((doc, i) => (
                    <li key={i} className="text-gray-600">{doc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('blog.familyVisa.costs.title')}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">{isRTL ? 'الخدمة' : 'Service'}</th>
                  <th className="text-right py-3 px-4">{isRTL ? 'الرسوم الحكومية' : 'Government Fee'}</th>
                  <th className="text-right py-3 px-4">{isRTL ? 'رسوم الخدمة' : 'Service Fee'}</th>
                  <th className="text-right py-3 px-4">{isRTL ? 'المجموع' : 'Total'}</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{item.service}</td>
                    <td className="text-right py-3 px-4">{item.government} AED</td>
                    <td className="text-right py-3 px-4">{item.serviceFee} AED</td>
                    <td className="text-right py-3 px-4 font-semibold">{item.total} AED</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            {isRTL ? '* قد تختلف التكاليف حسب الظروف الخاصة والرسوم الحكومية الحالية' : '* Costs may vary based on specific circumstances and current government fees'}
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className={`h-6 w-6 text-yellow-600 ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                {t('blog.familyVisa.notes.title')}
              </h3>
              <div className="space-y-2 text-yellow-700">
                {importantNotes.map((note, index) => (
                  <div key={index}>• {note}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            {t('blog.familyVisa.tips.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {successTips.map((tip, index) => (
              <div key={index} className="text-green-700">• {tip}</div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">
            {t('blog.familyVisa.cta.title')}
          </h3>
          <p className="mb-6">
            {t('blog.familyVisa.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
            >
              <Users className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('blog.familyVisa.cta.button1')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Heart className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('blog.familyVisa.cta.button2')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDependentsVisa;