"use client";

import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

const OtherEvents = () => {
  const CategoryData = [
    {
      key: "1",
      img: "/blog/category1.png",
      tag: "Categoría 1",
    },
    {
      key: "2",
      img: "/blog/category2.png",
      tag: "Categoría 2",
    },
    {
      key: "1",
      img: "/blog/category3.png",
      tag: "Categoría 1",
    },
    {
      key: "3",
      img: "/blog/category4.png",
      tag: "Categoría 3",
    },
    {
      key: "3",
      img: "/blog/category5.png",
      tag: "Categoría 3",
    },
    {
      key: "1",
      img: "/blog/category6.png",
      tag: "Categoría 1",
    },
    {
      key: "4",
      img: "/blog/category7.png",
      tag: "Categoría 4",
    },
    {
      key: "2",
      img: "/blog/category8.png",
      tag: "Categoría 2",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="other-events">
        <h2> Otros eventos </h2>
        <div className="events-cards">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
          >
            {CategoryData.map((elm) => (
              <div className="category">
                <div className="main-content">
                  <img src={elm.img} alt="" />
                  <div className="content">
                    <p>{elm.tag}</p>
                    <Link href=""> Leer más </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OtherEvents;
