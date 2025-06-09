import { type FC } from 'react';

const HeroImage: FC = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg"
        alt="Happy business traveler walking through airport"
      />
    </div>
  );
};

export default HeroImage; 