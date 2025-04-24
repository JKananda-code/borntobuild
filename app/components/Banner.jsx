
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
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Welcome to Our Charity Events
        </h1>
        <p className="text-lg md:text-2xl">
          Thank you for participating in our Charity Event held on 13 April 2025 <br />
          We shall let you know when we are ready for the next one. Meanwhile Stay Blessed.
        </p>
      </div>
    </div>
  );
};

export default Banner;
  
  