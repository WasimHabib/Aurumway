import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../styles/LandingPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const LandingPage = (props: {}) => {
  let headerText = "ERP Solutions";
  let key = 0;
  let learnMoreRef = useRef<HTMLDivElement>(null);
  let aboutOuterRef = useRef<HTMLDivElement>(null);
  let navRef = useRef<HTMLDivElement>(null);
  let mainInfoDesc =
    "Our SAP-certified experts deliver comprehensive ERP solutions and support for all of your business needs.";
  let learnMoreText = "Learn More";

  useLayoutEffect(() => {}, []);

  return (
    <>
      <div ref={navRef} className={"container-fluid " + styles.navContainer}>
        <nav
          className={
            "nav navbar navbar-expand-sm fixed-top navbar-dark " + styles.navbar
          }
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
              <li className={"nav-item " + styles.navItem}>
                <a href="#" className={"nav-link " + styles.navLink}>
                  Home
                </a>
              </li>
              <li className={"nav-item " + styles.navItem}>
                <a href="#" className={"nav-link " + styles.navLink}>
                  About
                </a>
              </li>
              <li className={"nav-item " + styles.navItem}>
                <a href="#" className={"nav-link " + styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        ref={learnMoreRef}
        className={"container-fluid " + styles.introContainer}
      >
        <div className={"row "}>
          <div className={"col "}>
            <h1 className={styles.introHeader}>{headerText}</h1>
          </div>
        </div>
        <div className={"row "}>
          <div className={"col "}>
            <img
              className={styles.stockImg}
              src="tech_stock_laptop.jpg"
              alt="tech stock laptop"
            />
          </div>
        </div>
        <div className={"row "}>
          <div className={"col "}>
            <div className={styles.mainInfoContainer}>
              <div className={"row "}>
                <div className={"col-4 px-0 ps-1 " + styles.mainImgContainer}>
                  <img
                    className={styles.mainInfoImage}
                    src="SAP-S4-HANA_icon.png"
                    alt=""
                  />
                </div>
                <div className={"col gx-0 px-0 " + styles.mainImgContainer}>
                  <img
                    className={styles.mainInfomiddleImage}
                    src="sap_successfactors_icon.png"
                    alt=""
                  />
                </div>
                <div className={"col-4 px-0 pe-1 " + styles.mainImgContainer}>
                  <img
                    className={styles.mainInfoImage}
                    src="sap_field_glass_icon.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={"row p-2"}>
                <p className={"col " + styles.mainInfoDesc}>{mainInfoDesc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"row "}>
          <div className={"col mb-3"}>
            <div className={styles.arwButton}>{learnMoreText}</div>
          </div>
        </div>
      </div>
      <div
        ref={aboutOuterRef}
        className={
          "container-fluid d-flex flex-column justify-content-around " +
          styles.aboutOuterContainer
        }
      >
        <div
          className={
            "d-flex flex-column justify-content-around " + styles.aboutContainer
          }
        >
          {getAboutPageTiles().map((val) => (
            <div key={key++} className={styles.tileContainer}>
              <img
                src={val.url}
                alt="performance_gauge_mobile"
                className={styles.tileIcon}
              />
              <p className={styles.tileText}>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function getAboutPageTiles(): any[] {
  let result: any[] = [];
  result[0] = {
    name: "perfTile",
    url: "performance_icon_mobile_mini.png",
    text: "Fast Performance",
  };
  result[1] = {
    name: "innTile",
    url: "lightbulb_mobile.png",
    text: "Innovative Solutions",
  };
  result[2] = {
    name: "flexTile",
    url: "flexible_pricing_icon.png",
    text: "Flexible Pricing",
  };
  return result;
}

function calculateAboutMargin() {}
