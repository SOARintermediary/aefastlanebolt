import React from 'react';
import { Building2, Plane, FileCheck, Users } from 'lucide-react';

const services = [
  {
    title: 'UAE Company Formation',
    description: 'Setup Mainland LLC, Free Zone Companies (RAKEZ, DMCC, IFZA), and Offshore Entities.',
    icon: Building2,
  },
  {
    title: 'Visa Services',
    description: 'Comprehensive visa solutions including Golden Visa, Family Visa, and Work Permits.',
    icon: Plane,
  },
  {
    title: 'PRO Services',
    description: 'Handle all government-related procedures with full pricing transparency.',
    icon: FileCheck,
  },
  {
    title: 'HR Solutions',
    description: 'Complete HR support including recruitment, payroll, and employee management.',
    icon: Users,
  },
];

const HRServices = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            From setup to scaling — we handle every government and corporate step so you don’t have to
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive business setup and support services in the UAE 
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-primary text-white shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>

              <div className="pt-8 text-center">
                <h3 className="text-lg font-medium text-primary">{service.title}</h3>
                <p className="mt-4 text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRServices;