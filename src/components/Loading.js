import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Loading = () => {
  return (
    <div className="loading">
      <h2>loading...</h2>
      <StaticImage
        src="../assets/loading.gif"
        alt="loading"
        className="logo"
        width={70}
        layout="fixed"
      />
    </div>
  );
};

export default Loading;
