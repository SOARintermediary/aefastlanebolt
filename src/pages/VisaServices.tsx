import React from 'react';
import ServiceForm from '../components/ServiceForm';

const VisaServices = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Visa Services</h1>
        <p className="text-xl text-gray-600 mb-12">Service coming soon</p>
        <ServiceForm service="visa-services" />
      </div>
    </div>
  );
};

export default VisaServices;