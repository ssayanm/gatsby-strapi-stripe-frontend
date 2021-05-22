import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../assets/romance.svg"
              alt="Pleasant Smith"
              className="logo"
              width={70}
              layout="fixed"
            />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
