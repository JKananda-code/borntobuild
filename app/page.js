
// app/home/page.js

import Banner from './components/Banner';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="mt-8 px-4 text-center">
        <h2 className="text-2xl font-bold">Welcome to Born to Build CBO</h2>
        <p className="text-lg font-bold mt-4">
          Explore our initiatives, programs, and ways to support the community within these pages.
        </p>
      </div>
      <hr  />
    </div>
  );
};

export default HomePage;

