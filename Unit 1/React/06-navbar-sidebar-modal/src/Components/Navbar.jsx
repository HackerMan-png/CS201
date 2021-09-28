import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links, socials } from "../util/consts";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../util/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const checkSize = () => {
    if(window.innerWidth >= 768){
      setShowLinks(true)
    }
    if(window.innerWidth < 768){
      setShowLinks(false)
    }
  };

  useEffect(() => {
    checkSize()
    window.addEventListener("resize", checkSize)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" className="logo" />
          <button onClick={toggleLinks} className="nav-toggle">
            <GiHamburgerMenu />
          </button>
        </div>

        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <ul className={`social-icons ${showLinks && "show"}`}>
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
