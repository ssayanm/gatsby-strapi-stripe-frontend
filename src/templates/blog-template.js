import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import Title from "../components/Title";
import Seo from "../components/Seo";

const BlogTemplate = ({ data }) => {
  const { content, title, desc, image } = data.blog;
  return (
    <Layout>
      <Seo title={title} description={desc} />
      <section className="blog-template">
        <Title title={title} />
        <div className="blog-center">
          <div className="article-inner-img">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Matt"
              className="blog-single-img"
            />
          </div>
          <article className="blog-text">
            <ReactMarkdown children={content} />
          </article>
          <Link to="/contact" className="btn-primary">
            contact
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      author
      image {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, formats: [AUTO])
        }
      }
    }
  }
`;

export default BlogTemplate;
