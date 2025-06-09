import { type FC } from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Footer: FC = () => {
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
          
          <ContactInfo />
          <SocialLinks />
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