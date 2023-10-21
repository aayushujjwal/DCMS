import React from 'react';
import '../Styles/LandingPageComponents/Locations.css';
import pic2 from '../../Assets/21.jpg';
import pic3 from '../../Assets/23.jpg';
import pic4 from '../../Assets/22.jpg';

const Locations = () => {
  const locations = [
    {
        name: "GrooveHub Mumbai",
        address: "Mumbai, Maharashtra",
        image: pic2,
      },
      {
        name: "Rhythm Oasis Jaipur",
        address: "Jaipur, Rajasthan",
        image: pic3,
      },
      {
        name: "Dance Sphere Bengaluru",
        address: "Bengaluru, Karnataka",
        image: pic4,
      }
  ];

  return (
    <>
    <div className="full1">
    <h2 className='heading'><center>Branches across India</center></h2>
    <div className="dance-club-locations">
      
      {locations.map((location, index) => (
        <div className="location-card" key={index}>
          <img src={location.image} alt={location.name} className="location-image" />
          <div className="location-details">
            <h3 className="location-name">{location.name}</h3>
            <p className="location-address">{location.address}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Locations;
