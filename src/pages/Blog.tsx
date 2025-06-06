import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Building2, FileText, Globe } from 'lucide-react';

const blogPosts = [
  {
    id: 'free-zone-vs-mainland',
    title: 'Free Zone vs Mainland: Which is Right for Your UAE Business?',
    excerpt: 'Discover the key differences between free zone and mainland business setup in the UAE, and learn which option best suits your business goals and requirements.',
    icon: Building2,
    readTime: '8 min read',
    category: 'Business Setup',
    path: '/blog/free-zone-vs-mainland'
  },
  {
    id: 'mainland-business-license-dubai',
    title: 'How to Open a Mainland Business License in Dubai',
    excerpt: 'A comprehensive step-by-step guide to obtaining your mainland business license in Dubai, including requirements, procedures, and expert tips.',
    icon: FileText,
    readTime: '10 min read',
    category: 'Licensing',
    path: '/blog/mainland-business-license-dubai'
  },
  {
    id: 'starting-business-uae-foreigner',
    title: 'Starting a Business in the UAE as a Foreigner',
    excerpt: 'Everything foreign entrepreneurs need to know about starting a business in the UAE, from legal requirements to practical considerations.',
    icon: Globe,
    readTime: '12 min read',
    category: 'Foreign Investment',
    path: '/blog/starting-business-uae-foreigner'
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
            UAE Business Insights & Guides
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, practical guides, and answers to your most important questions about doing business in the UAE. 
            Stay informed with the latest regulations, best practices, and strategic advice.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => navigate(post.path)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <post.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:text-primary-light transition-colors duration-200">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">More Articles Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            We're constantly adding new insights and guides to help you navigate the UAE business landscape. 
            Stay tuned for more expert content on company formation, visa services, PRO procedures, and HR solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Upcoming Topics</h4>
              <ul className="space-y-1">
                <li>• Golden Visa Requirements</li>
                <li>• VAT Registration Guide</li>
                <li>• Banking Setup Tips</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Expert Insights</h4>
              <ul className="space-y-1">
                <li>• Market Entry Strategies</li>
                <li>• Compliance Best Practices</li>
                <li>• Cost Optimization Tips</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Industry Focus</h4>
              <ul className="space-y-1">
                <li>• Tech Startups in UAE</li>
                <li>• E-commerce Licensing</li>
                <li>• Professional Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-300 mb-6">
              While our articles provide comprehensive information, every business situation is unique. 
              Get personalized advice from our UAE business setup experts.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark transition-colors duration-200"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;