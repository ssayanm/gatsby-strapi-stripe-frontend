import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Blog = ({ id, title, date, image, author, slug, category, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {image && (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={title}
            className="blog-img"
          />
        )}

        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{author}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
};

export default Blog;
