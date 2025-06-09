import { type FC } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialLinks: FC = () => {
  return (
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
  );
};

export default SocialLinks; 