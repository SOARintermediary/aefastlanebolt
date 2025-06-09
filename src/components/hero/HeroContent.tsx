import { type FC } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent: FC = () => {
  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span className="block">Your One-Stop Partner for</span>
        <span className="block text-accent">Strategic UAE Entry, Setup & Corporate Support</span>
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Fast, reliable, and tailored solutions for company formation, Golden Visa assistance, and complete PRO services.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#contact"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent; 