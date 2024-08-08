"use client";

import { Tabs } from "antd";
import Link from "next/link";
import React from "react";

const BlogsCategory = () => {
  const CategoryData = [
    {
      img: "/blog/category1.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
      },
    },
    {
      img: "/blog/category2.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#4E169F",
        },
      },
    },
    {
      img: "/blog/category3.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
      },
    },
    {
      img: "/blog/category4.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#DF54FF",
        },
      },
    },
    {
      img: "/blog/category5.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#DF54FF",
        },
      },
    },
    {
      img: "/blog/category6.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#04DDE5",
        },
      },
    },
    {
      img: "/blog/category7.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#0029C2",
        },
      },
    },
    {
      img: "/blog/category8.png",
      tag: "Categoría 1",
      title: "Ut fringilla tortor neque, non vulputate massa euismod quis.",
      color: {
        style: {
          color: "#4E169F",
        },
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: "Categoría 1",
      //   children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Categoría 2",
      //   children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Categoría 3",
      //   children: "Content of Tab Pane 3",
    },
    {
      key: "3",
      label: "Categoría 4",
      //   children: "Content of Tab Pane 3",s
    },
  ];

  const onChange = (key: any) => {
    console.log(key);
  };

  return (
    <>
      <div className="container">
        <div className="blog-category">
          <button> Todos los artículos </button>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className="category-cards">
          {CategoryData.map((elm) => (
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
      </div>
    </>
  );
};

export default BlogsCategory;
