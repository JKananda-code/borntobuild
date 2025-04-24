const TeamCard = ({ image, fullname, email, phone }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 text-center">
        <img
          src={image}
          alt={fullname}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{fullname}</h3>
        <p className="text-gray-600 mb-1">Email: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
        <p className="text-gray-600">Phone: <a href={`tel:${phone}`} className="text-blue-500 hover:underline">{phone}</a></p>
      </div>
    );
  };
  
  export default TeamCard;