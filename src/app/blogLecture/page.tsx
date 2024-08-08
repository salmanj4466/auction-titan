import React from "react";
import BlogDetail from "../Components/blogLecture/BlogDetail";
import Recomendation from "../Components/blogLecture/Recomendation";

const BlogLecture = () => {
  return (
    <>
      <div className="blog-detail">
        <BlogDetail />
        <Recomendation />
      </div>
    </>
  );
};

export default BlogLecture;
