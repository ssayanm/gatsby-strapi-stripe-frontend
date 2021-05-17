import React from "react";
import Title from "./Title";
import Blog from "./Blog";
import { Link } from "gatsby";
import { Fade } from "react-reveal";

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section blog-section">
      <Fade bottom>
        <Title title={title} />

        <div className="section-center blogs-center">
          {blogs.map((blog) => {
            return <Blog key={blog.id} {...blog} />;
          })}
        </div>
      </Fade>
      {showLink && (
        <Link to="/blog-posts" className="btn-primary center-btn">
          more
        </Link>
      )}
    </section>
  );
};

export default Blogs;
