import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/588712004829710",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/kathryn-bumgarner-rn-msn-chpn-566739b/",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/bumgarnerkathryn/",
  },
  {
    id: 3,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:kathryn@traumarecovery.net",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        {link.icon}
      </a>
    </li>
  );
});

const social = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};

export default social;
