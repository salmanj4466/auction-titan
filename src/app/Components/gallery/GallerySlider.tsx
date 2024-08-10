"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GallerySlider = () => {
  return (
    <>
      <section className="container">
        <div className="gallery-slider">
          <h2>Galería</h2>
          <p>11 de abril de 2024</p>
          <div className="slides">
            <Carousel responsive={responsive}>
              <div>
                <img src="/gallery/gallery-img.png" alt="" />
              </div>
              <div>
                <img src="/gallery/gallery-img.png" alt="" />
              </div>
              <div>
                <img src="/gallery/gallery-img.png" alt="" />
              </div>
              <div>
                <img src="/gallery/gallery-img.png" alt="" />
              </div>
              <div>
                <img src="/gallery/gallery-img.png" alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySlider;
