"use client";

import { Tabs } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'

const BlogsCategory = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  const CategoryData = [
    {
      key: "1",
      img: "/blog/category1.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
        mobStyle: {
          backgroundColor: '#04DDE5',
          color: '#fff'
        }
      },
    },
    {
      key: "2",
      img: "/blog/category2.png",
      tag: "Categoría 2",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#4E169F",
        },
        mobStyle: {
          backgroundColor: '#4E169F',
          color: '#fff'
        }
      },
    },
    {
      key: "1",
      img: "/blog/category3.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
        mobStyle: {
          backgroundColor: '#04DDE5',
          color: '#fff'
        }
      },
    },
    {
      key: "3",
      img: "/blog/category4.png",
      tag: "Categoría 3",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#DF54FF",
        },
        mobStyle: {
          backgroundColor: '#DF54FF',
          color: '#fff'
        }
      },
    },
    {
      key: "3",
      img: "/blog/category5.png",
      tag: "Categoría 3",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#DF54FF",
        },
        mobStyle: {
          backgroundColor: '#DF54FF',
          color: '#fff'
        }
      },
    },
    {
      key: "1",
      img: "/blog/category6.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
        mobStyle: {
          backgroundColor: '#04DDE5',
          color: '#fff'
        }
      },
    },
    {
      key: "4",
      img: "/blog/category7.png",
      tag: "Categoría 4",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#0029C2",
        },
        mobStyle: {
          backgroundColor: '#0029C2',
          color: '#fff'
        }
      },
    },
    {
      key: "2",
      img: "/blog/category8.png",
      tag: "Categoría 2",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#4E169F",
        },
        mobStyle: {
          backgroundColor: '#4E169F',
          color: '#fff'
        }
      },
    },
  ];

  const items = [
    {
      key: "all",
      label: "Todos los artículos",
    },
    {
      key: "1",
      label: "Categoría 1",
    },
    {
      key: "2",
      label: "Categoría 2",
    },
    {
      key: "3",
      label: "Categoría 3",
    },
    {
      key: "4",
      label: "Categoría 4",
    },
  ];

  const [activeKey, setActiveKey] = useState<string>("all");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };


  const filteredCards =
    activeKey === "all"
      ? CategoryData
      : CategoryData.filter((card) => card.key === activeKey);

  return (
    <>
      <div className="container">
        <div
          className={
            window.location.pathname === "/blogLecture"
              ? "blogLectureCategoryClass"
              : "blog-category"
          }
        >
          <Tabs
            activeKey={activeKey}
            onChange={handleTabChange}
            items={items}
            style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
          />
        </div>

        {isMobile ? (
          <>
            <div className="category-mobile-cards">
              {filteredCards.map((elm) => (
                <div className="category-mbile">
                  <img src={elm.img} alt="" />
                  <div className="content">
                    <span style={elm.color.mobStyle}>{elm.tag}</span>
                    <h4>Main title, Main title, Main title, Main Title, Main title....</h4>
                    <Link href=""> Leer más </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="category-cards">
              {filteredCards.map((elm) => (
                <div className="category">
                  <img src={elm.img} alt="" />
                  <div className="content">
                    <span style={elm.color.style}>{elm.tag}</span>
                    <h4>{elm.title}</h4>
                    <Link href=""> Leer más </Link>
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

export default BlogsCategory;
