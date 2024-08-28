'use client'

import Link from "next/link";
import React from "react";
import { useMediaQuery } from 'react-responsive'

const Awards = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  const CategoryData = [
    {
      img: "/events/event1.png",
      tag: "1er Lugar",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis. ",
      color: {
        style: {
          color: "#04DDE5",
        },
        mobStyle: {
          backgroundColor: '#04DDE5'
        }
      },
    },
    {
      img: "/events/event2.png",
      tag: "2do Lugar",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis. ",
      color: {
        style: {
          color: "#4E169F",
        },
        mobStyle: {
          backgroundColor: '#4E169F'
        }
      },
    },
    {
      img: "/events/event3.png",
      tag: "3er  Lugar",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#ffb202",
        },
        mobStyle: {
          backgroundColor: '#ffb202'
        }
      },
    },
    {
      img: "/events/event4.png",
      tag: "4to  Lugar",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#DF54FF",
        },
        mobStyle: {
          backgroundColor: '#DF54FF'
        }
      },
    },
  ];

  return (
    <>
      <div className="container events">
        <h2> conoce nuestros premios </h2>

        {isMobile ? (
          <>
            <div className="category-mobile-cards">
              {CategoryData.map((elm) => (
                <div className="category-mobile">
                  <img src={elm.img} alt="" />
                  <div className="content">
                    <span style={elm.color.mobStyle}>{elm.tag}</span>
                    <h4>{elm.title}</h4>
                    <Link href=""> Saber más </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="category-cards">
              {CategoryData.map((elm) => (
                <div className="category">
                  <img src={elm.img} alt="" />
                  <div className="content">
                    <span style={elm.color.style}>{elm.tag}</span>
                    <h4>{elm.title}</h4>
                    <Link href=""> Saber más </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Awards;
