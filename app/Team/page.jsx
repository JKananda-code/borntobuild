
// app/team/page.js

import TeamCard from '../components/TeamCard';
import ActivityCard from '../components/ActivityCard';
import CountyMap from '../components/CountyMap';

const TeamPage = () => {
  const committeeMembers = [
    {
      image: '/BTB-Chairman.jpg',
      fname: 'Boniface Mwangi-Chairman',
      email: 'Boniface@example.com',
      phone: '+254 700 123 456',
    },
    {
      image: '/Achieng-Treasurer.jpeg',
      fname: 'Achieng-Treasurer',
      email: 'Achieng@example.com',
      phone: '+254 700 123 456',
    },
    // Add other members similarly
    {
      image: '/BTB-ViceChair.jpg',
      fname: 'Mercy Kimani - ViceChair',
      email: 'Maggie@example.com',
      phone: '+254 700 123 456',
    },

    {
      image: '/BTB-ViceSecretary.jpg',
      fname: 'Monicah Gitau - Secretary',
      email: 'Maggie@example.com',
      phone: '+254 700 123 456',
    },
    
    
  ];

 
// Add other members similarly

  const activities = [
    {
      eventNature: 'Food Distribution Event',
      venue: 'Kiambu Town',
    },
    {
      eventNature: 'Medical Camp',
      venue: 'Limuru',
    },
    // Add other activities similarly
  ];

  return (
    <div className="py-8 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {committeeMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            email={member.email}
            phone={member.phone}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Activities</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            eventNature={activity.eventNature}
            venue={activity.venue}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Kiambu County</h2>
      <CountyMap />
    </div>
  );
};

export default TeamPage;