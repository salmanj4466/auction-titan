import React from "react";
import BlogDetail from "../Components/BlogLecture/BlogDetail";
import Recomendation from "../Components/BlogLecture/Recomendation";

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
