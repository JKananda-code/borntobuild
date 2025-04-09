
  // components/Banner.js

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-96">
      {/* Background Image */}
      <Image
        src="/banner.jpg" // Replace with your actual image path
        alt="BTB Charity Event Banner"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="rounded-lg"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Welcome to Our Charity Event
        </h1>
        <p className="text-lg md:text-2xl">
          BTB Upcoming Event: Charity Event - Born to Build CBO<br />
          Sunday, April 13th, 2025
        </p>
      </div>
    </div>
  );
};

export default Banner;
  
  