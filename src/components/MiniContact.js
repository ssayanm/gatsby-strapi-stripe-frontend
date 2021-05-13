import { Link } from "gatsby";
import React from "react";
import { Fade } from "react-reveal";

const MiniContact = () => {
  return (
    <section className="section minicontact center">
      <Fade bottom>
        <h3>Ready to Talk</h3>
        <Link to="/contact" className="btn-transparent">
          Let's get Started
        </Link>{" "}
      </Fade>
    </section>
  );
};

export default MiniContact;
