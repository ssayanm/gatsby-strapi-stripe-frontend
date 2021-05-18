import React from "react";

const TitleBar = ({ title, desc }) => {
  return (
    <div className="section bg-grey center">
      <div className="section-center">
        <h2>{title || "default title"}</h2>
        <p>{desc || "Lorem ipsum dolor sit amet"}</p>
      </div>
    </div>
  );
};

export default TitleBar;
