import React from "react";
import { Link } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <Fade left>
          <article className="hero-info">
            <div>
              <div className="underline" />
              <h1>Pleasant Smith</h1>
              <h4>Certified Relationship Coach</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore uiteb butip.
              </p>
              <Link to="/contact" className="btn-primary">
                Let's get Started
              </Link>
              <SocialLinks />
            </div>
          </article>
        </Fade>

        <StaticImage
          src="../assets/himg.jpg"
          alt="Pleasant Smith"
          className="hero-img"
          layout="fullWidth"
          aspectRatio={4 / 3}
        />
      </div>
    </header>
  );
};

export default Hero;
