"use client";

import { useState } from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const GallerySlider = () => {
  const images = [
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
    "/gallery/gallery-img.png",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageClick = (image: any) => {
    setActiveImage(image);
  };

  return (
    <>
      <section className="container">
        <div className="gallery-slider">
          <h2>Galería</h2>
          <p>11 de abril de 2024</p>
          <div className="slider">
            <div className="main-image">
              <img src={activeImage} alt="Main" />
            </div>
            <div className="thumbnail-container">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    image === activeImage ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySlider;
