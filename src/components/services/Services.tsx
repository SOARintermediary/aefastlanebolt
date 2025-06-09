import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

const Services: FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            From setup to scaling — we handle every government and corporate step so you don't have to
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive business setup and support services in UAE
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => navigate(service.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 