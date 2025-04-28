
// app/home/page.js

import Banner from './components/Banner';

const HomePage = () => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <div className="flex flex-wrap justify-center">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 overflow-hidden m-4">
        <h1 className="text-sm md:text-2xl font-bold mb-2">
          Paticipating in our Charity Events is Compassion in Action
        </h1>
        <div className="text-sm md:text-2xl">
        Dear Members, Partners, and Well-Wishers,
        We extend our heartfelt gratitude to each one of you for your incredible support during our CBO Charity Event at Salem Rescue Center, Maraba, Thika, on April 13th, 2025. Your generous contributions—whether in cash or kind—played an essential role in making the event a resounding success.
        As Born To Build CBO, we remain deeply thankful for your unwavering commitment to this noble cause of uplifting the needy in our community. Your kindness and support have left a lasting impact, and we will cherish your contributions forever.
        Thank you once again for being part of this meaningful journey.
        Warm Regards,
        CBO Executive Committee
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;

