import React from 'react';
import '../Styles/LandingPageComponents/Gallery.css'
import pic1 from '../../Assets/11.jpg';
import pic2 from '../../Assets/12.jpg';
import pic3 from '../../Assets/13.jpg';
import pic4 from '../../Assets/14.jpg';
import pic5 from '../../Assets/15.jpg';
import pic6 from '../../Assets/16.jpg';
const Gallery = () => {
  const galleryImages = [
    pic1,pic2,pic3,pic4,pic5,pic6
    // Add more image paths as needed
  ];

  return (
    <section className="photo-gallery">
      <div className="gallery-container">
        <h2><center>Gallery</center></h2>
        <div className="image-grid">
          {galleryImages.map((imagePath, index) => (
            <img key={index} src={imagePath} alt={`Imagess ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

