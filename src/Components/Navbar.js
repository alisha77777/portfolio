import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleLinkClick = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-dark fixed-top navbar-expand-lg px-5 ${
        isScroll ? "brand-b" : "bg-transparent"
      } Navbar`}
    >
      <div className="container-fluid">
        <a className="navbar-brand heading fs-2 fw-bold" href="#home">
          <span>Portfolio</span>
          <span className={`${!isScroll && "brand-c"}`}>lio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end text-bg-dark ${
            isOffcanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={toggleOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 border-bottom-3rem warning text-center list">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#home"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#about"
                  onClick={handleLinkClick}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#projects"
                  onClick={handleLinkClick}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#skills"
                  onClick={handleLinkClick}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#tool"
                  onClick={handleLinkClick}
                >
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
