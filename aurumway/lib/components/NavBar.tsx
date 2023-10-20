import React from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@splidejs/react-splide/css";
import styles from "../../styles/LandingPage.module.css";
import Link from "next/link";
export const NavBar = () => {
  return (
    <div className={"container-fluid " + styles.navContainer}>
      <nav
        className={
          "container-fluid nav navbar navbar-expand-sm fixed-top navbar-dark " +
          styles.navbar
        }
      >
        <span className={"navbar-brand  " + styles.navbarBrand}>
          <img src="/image_logo_icon.png" alt="" height="50" className="mb-1" />
        </span>
        <button
          data-bs-toggle="collapse"
          className={"navbar-toggler bi bi-list " + styles.hamburgerIcon}
          data-bs-target="#navBarNav"
          aria-controls="#navBarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className={"collapse navbar-collapse "} id="navBarNav">
          <ul className="navbar-nav mr-auto">
            <Link href="/">
              <li className={"nav-item " + styles.navItem}>
                <a className={"nav-link " + styles.navLink}>Home</a>
              </li>
            </Link>

            <Link href="/about">
              <li className={"nav-item " + styles.navItem}>
                <a className={"nav-link " + styles.navLink}>About</a>
              </li>
            </Link>

            <Link href="/contact">
              <li className={"nav-item " + styles.navItem}>
                <a className={"nav-link " + styles.navLink}>Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
