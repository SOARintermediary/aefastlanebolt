import { type FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <div
      className="relative bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex p-3 rounded-lg bg-accent text-primary shadow-lg">
          <Icon size={24} />
        </div>
      </div>

      <div className="pt-8 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-4 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 