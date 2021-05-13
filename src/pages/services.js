import React from "react";
import Layout from "../components/Layout";
import TitleBar from "../components/TitleBar";
import Service from "../components/Service";
import Seo from "../components/Seo";
import { Fade } from "react-reveal";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import MiniContact from "../components/MiniContact";

const Services = ({ data }) => {
  const { title, description, image, caption } = data.strapiInnerpages;

  return (
    <Layout>
      <Seo
        title="Services"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <TitleBar title={title} />
      <section className="services-page">
        <div className="services-center section-center">
          <Fade left>
            <div>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={title}
                className="services-img"
              />
              <br />
              <em>{caption}</em>
            </div>
          </Fade>
          <Fade right>
            <div className="services-text">
              <ReactMarkdown children={description} />
            </div>
          </Fade>
        </div>
      </section>
      <Service />
      <MiniContact />
    </Layout>
  );
};

export const query = graphql`
  {
    strapiInnerpages(title: { eq: "Services" }) {
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

export default Services;
