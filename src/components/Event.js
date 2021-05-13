import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Event = ({ id, title, eventdate, image, slug }) => {
  return (
    <Link to={`/${slug}`} key={id} className="blog">
      <div className="blog-card">
        {image && (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={title}
            className="event-img"
          />
        )}
        <div className="blog-excerpt">
          <h3>{title}</h3>
          <h5>{eventdate}</h5>
        </div>
      </div>
    </Link>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  eventdate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default Event;
