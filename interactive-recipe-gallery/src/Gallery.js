import React, { useState } from 'react';
import { images } from './imageList';
import './Gallery.css'; 

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="gallery-container">
      <img className="gallery-img" src={images[currentIndex].url} alt="Recipe" />
      <p className="description">{images[currentIndex].description}</p>
      <button className="button" onClick={goToPrevious}>Previous</button>
      <button className="button" onClick={goToNext}>Next</button>
    </div>
  );
}
