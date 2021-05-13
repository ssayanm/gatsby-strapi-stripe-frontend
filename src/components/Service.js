import React from "react";
import Title from "./Title";
import services from "../constants/services";
import { Fade } from "react-reveal";
import { Link } from "gatsby";

const Service = () => {
  return (
    <section className="section">
      <Title title="what i do" />
      <Fade bottom>
        <div className="section-center services-center">
          {services.map((service) => {
            const { id, icon, title, text, url } = service;
            return (
              <Link to={url} key={id}>
                <article className="service">
                  {icon}
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default Service;
