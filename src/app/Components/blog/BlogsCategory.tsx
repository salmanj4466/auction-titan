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

  return (
    <>
      <div className="container">
        <div className="blog-category">
          <ul>
            <li>Todos los artículos</li>
            <li>Categoría 1</li>
            <li>Categoría 2</li>
            <li>Categoría 3</li>
            <li>Categoría 4</li>
          </ul>
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
