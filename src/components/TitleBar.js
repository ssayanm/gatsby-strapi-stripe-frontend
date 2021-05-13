import React from "react";

const TitleBar = ({ title }) => {
  return (
    <div className="section bg-grey center">
      <div className="section-center">
        <h2>{title || "default title"}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua uiteb
          butip.
        </p>
      </div>
    </div>
  );
};

export default TitleBar;
