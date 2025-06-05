import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12 mb-4" />
            <p className="text-gray-300">
              Your One-Stop Partner for Business Setup in the UAE
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@aefastlane.com" className="flex items-center text-gray-300 hover:text-accent">
                <Mail size={20} className="mr-2" />
                contact@aefastlane.com
              </a>
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-2" />
                +971-XXX-XXX-XXX
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/aefastlane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/aefastlane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} AEFastLane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;