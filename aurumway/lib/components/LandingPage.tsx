import React from "react";
import gsap from "gsap";
import styles from "../../styles/LandingPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const LandingPage = (props: {}) => {
  return (
    <div className={"container-fluid p-0 " + styles.bodyContainer}>
      <nav
        className={"nav navbar navbar-expand-sm navbar-dark " + styles.navbar}
      >
        <span className={"navbar-brand  " + styles.navbarBrand}>
          <img src="cog_golden.png" alt="" height="50" className="mb-1" />
          AurumWay LLC
        </span>
        <button
          data-bs-toggle="collapse"
          className={"navbar-toggler bi bi-list " + styles.hamburgerIcon}
          data-bs-target="#navBarNav"
          aria-controls="#navBarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navBarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className={"nav-link " + styles.navLink}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={"nav-link " + styles.navLink}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={"nav-link " + styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
