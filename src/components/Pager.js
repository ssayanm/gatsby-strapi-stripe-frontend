import React from "react";
import { Link } from "gatsby";

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <section className="pager">
      <div>
        {previousPagePath && (
          <Link to={previousPagePath}>
            <button className="btn-primary">← Newer Posts</button>
          </Link>
        )}
      </div>

      <div>
        {nextPagePath && (
          <Link to={nextPagePath}>
            <button className="btn-secondary">Older Posts →</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Pager;
