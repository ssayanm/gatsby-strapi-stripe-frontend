import React from "react";
import Layout from "../components/Layout";
import TitleBar from "../components/TitleBar";
import Seo from "../components/Seo";
import MiniContact from "../components/MiniContact";
import { Fade } from "react-reveal";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const { title, description, image, caption } = data.strapiInnerpages;

  return (
    <Layout>
      <Seo
        title="About Pleasant"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title={title} />
      <section className="about-page">
        <div className="about-center section-center">
          <Fade left>
            <div>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={title}
                className="about-img"
              />
              <br />
              <em>{caption}</em>
            </div>
          </Fade>
          <Fade right>
            <div className="about-text">
              <ReactMarkdown children={description} />
            </div>
          </Fade>
        </div>
      </section>
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  {
    strapiInnerpages(title: { eq: "About Us" }) {
      title
      description
      slug
      caption
      image {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, formats: [AUTO])
        }
      }
    }
  }
`;

export default About;
