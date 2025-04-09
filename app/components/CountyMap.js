// components/TeamCard.js

// components/CountyMap.js

const CountyMap = () => {
    return (
      <div className="bg-gray-100 shadow-md rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4 text-center">Kiambu County Map</h3>
        <img
          src="/kiambu-county-map.png"
          alt="Kiambu County Map"
          className="w-full h-64 md:w-1/2 md:h-96 lg:w-1/3 lg:h-128"         
        />
      </div>
    );
  };
  
  export default CountyMap;