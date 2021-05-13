import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";
import { Link } from "gatsby";
// import ReactMarkdown from "react-markdown";

const Info = () => {
  // const data = useStaticQuery(graphql`
  //   query siteInfo {
  //     infodata: strapiHome {
  //       title
  //       description
  //       caption
  //       image {
  //         childImageSharp {
  //           gatsbyImageData(
  //             width: 500
  //             quality: 100
  //             formats: [AUTO, WEBP, AVIF]
  //           )
  //         }
  //       }
  //     }
  //     sitemeta: site(siteMetadata: { title: {} }) {
  //       siteMetadata {
  //         siteUrl
  //         author
  //       }
  //     }
  //   }
  // `);

  // const { title, description, image, caption } = data.infodata;
  // const { author } = data.sitemeta.siteMetadata;

  return (
    <section className="section info bg-grey">
      <article>
        <Fade bottom>
          <div className="section-center">
            <h2>A simple phrase about your business here.</h2>

            <br />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <Link to="/contact" className="btn-primary">
              contact
            </Link>
          </div>
        </Fade>
      </article>
    </section>
  );
};

export default Info;
