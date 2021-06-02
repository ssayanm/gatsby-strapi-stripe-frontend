import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Seo from "../components/Seo";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Pleasant Smith"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <section className="contact-page">
        <Title title="Pleasant Smith Contact" />
        <div className="contact-block">
          <Fade left>
            <div className="contact-form">
              <h3>Get in touch</h3>
              <form action="https://formspree.io/xleoewkv" method="POST">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    aria-label="name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    placeholder="phone"
                    name="phone"
                    aria-label="phone"
                    className="form-control"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    aria-label="email"
                    className="form-control"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    aria-label="message"
                    placeholder="message"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn btn-primary">
                  submit here
                </button>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="contact-address">
              <StaticImage
                src="../assets/himg.jpg"
                alt="Pleasant Smith"
                className="contact-img"
              />

              <p>
                <a href="mailto:info@PleasantSmith.com">
                  <FaEnvelope className="nav-icon" /> Email:
                  info@PleasantSmith.com
                </a>

                <br />
                <a href="tel:9378151633">
                  <FaMobileAlt className="nav-icon" /> Call: (888) 815-888
                </a>
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
