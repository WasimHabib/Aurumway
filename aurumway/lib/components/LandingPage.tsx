import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { sendEmail } from "../services/commonFuncs";
import styles from "../../styles/LandingPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LandingPage = (props: {}) => {
  let headerText = "ERP Solutions";
  let key = 0;
  let imgContRef = useRef<HTMLDivElement>(null);
  let imgRef = useRef<HTMLImageElement>(null);
  let parRef = useRef<HTMLParagraphElement>(null);
  let textAreaRef = useRef<HTMLTextAreaElement>(null);
  let formContRef = useRef<HTMLDivElement>(null);
  let bodyRef = useRef<HTMLDivElement>(null);
  let navRef = useRef<HTMLDivElement>(null);
  let introRef = useRef<HTMLDivElement>(null);
  let aboutRef = useRef<HTMLDivElement>(null);
  let contactRef = useRef<HTMLDivElement>(null);
  let nameRef = useRef<HTMLInputElement>(null);
  let companyRef = useRef<HTMLInputElement>(null);
  let emailRef = useRef<HTMLInputElement>(null);
  let loadingRef = useRef<HTMLDivElement>(null);
  let arrVals: any[] = [];
  let titleLabel = "Contact";
  let emailLabel = "Email Address:";
  let nameLabel = "Name:";
  let companyLabel = "Company:";
  let messageLabel = "Message:";
  let SubmitText = "Submit";
  let mainInfoDesc =
    "Our SAP-certified experts deliver comprehensive ERP solutions and support for all of your business needs.";
  let learnMoreText = "Learn More";
  function scrollPage(index: number, arrVals: any[]) {
    window.scrollTo({
      behavior: "smooth",
      top: arrVals[index],
    });
  }
  function submitForm() {
    sendEmail(
      nameRef!.current!.value,
      "",
      emailRef!.current!.value,
      textAreaRef!.current!.value
    )
      .then((res) => {
        loadingRef.current!.style.display = "none";
        const successToast = toast.success(
          "Email Sent! Thank you for your business!",
          {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            hideProgressBar: true,
          }
        );
      })
      .catch((err) => {
        loadingRef.current!.style.display = "none";
        const failureToast = toast.error(
          "Unable to Send Email. Try again in a little bit.",
          {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            hideProgressBar: true,
          }
        );
      });
  }
  useLayoutEffect(() => {
    parRef!.current!.style.marginLeft =
      (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
      "px";
    parRef!.current!.style.marginRight =
      (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
      "px";
    textAreaRef!.current!.style.height =
      formContRef!.current!.clientHeight / 2 + "px";

    window.addEventListener("resize", () => {
      parRef!.current!.style.marginLeft =
        (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
        "px";
      parRef!.current!.style.marginRight =
        (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
        "px";
      textAreaRef!.current!.style.height =
        formContRef!.current!.clientHeight / 2 + "px";
    });

    arrVals[0] = 0;
    arrVals[1] = introRef!.current!.getBoundingClientRect().height;
    arrVals[2] =
      aboutRef!.current!.getBoundingClientRect().height +
      introRef!.current!.getBoundingClientRect().height;
  });
  return (
    <div ref={bodyRef}>
      <ToastContainer />
      <div ref={loadingRef} className={styles.overlay}>
        <div className={styles.symbolContainer}>
          <img
            src="loading-76.webp"
            alt="loading.gif..."
            className={styles.spinner}
          />
        </div>
      </div>
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
                <a
                  onClick={() => scrollPage(0, arrVals)}
                  className={"nav-link " + styles.navLink}
                >
                  Home
                </a>
              </li>
              <li className={"nav-item " + styles.navItem}>
                <a
                  onClick={() => scrollPage(1, arrVals)}
                  className={"nav-link " + styles.navLink}
                >
                  About
                </a>
              </li>
              <li className={"nav-item " + styles.navItem}>
                <a
                  onClick={() => scrollPage(2, arrVals)}
                  className={"nav-link " + styles.navLink}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        ref={introRef}
        className={"container-fluid " + styles.introContainer}
      >
        <div className={"row "}>
          <div className={"col "}>
            <h1 className={styles.introHeader}>{headerText}</h1>
          </div>
        </div>
        <div className={"row "}>
          <div className={"col d-flex justify-content-center"}>
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
                <div
                  ref={imgContRef}
                  className={"col-4 px-0 ps-1 " + styles.mainImgContainer}
                >
                  <img
                    ref={imgRef}
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
              <div className={"row "}>
                <p ref={parRef} className={"col " + styles.mainInfoDesc}>
                  {mainInfoDesc}
                </p>
              </div>
            </div>
            <div className={" " + styles.mainInfoContainerDesktop}>
              {getInfoImgObjects().map((val, index) => {
                return (
                  <div
                    key={index}
                    className={" " + styles.mainImgContainerDesktop}
                  >
                    <img
                      src={val.src}
                      alt="Info_Img"
                      className={" " + styles.mainInfoImageDesktop}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={"row " + styles.arwButtonContainer}>
          <div className={"col mb-3"}>
            <div
              className={styles.arwButton}
              onClick={() => {
                scrollPage(1, arrVals);
              }}
            >
              {learnMoreText}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className={"container-fluid " + styles.aboutOuterContainer}
      >
        <div className={"row mx-0 " + styles.aboutContainer}>
          {getAboutPageTiles().map((val) => (
            <div key={key++} className={"col-md " + styles.tileContainer}>
              <img
                src={val.url}
                alt="performance_gauge_mobile"
                className={styles.tileIcon}
              />
              <p className={styles.tileText}>{val.text}</p>
              <p className={styles.tileDesc}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={contactRef}
        className={"container-fluid " + styles.contactOuterContainer}
      >
        <div className={" " + styles.contactContainer}>
          <div className={"row " + styles.contactTitle}>{titleLabel}</div>
          <div ref={formContRef} className={styles.formContainer}>
            <div className={"row " + styles.formGroup}>
              <div className={"col-sm "}>
                <label
                  style={{ paddingTop: "1rem" }}
                  className={"d-block " + styles.formLabel}
                >
                  {nameLabel}
                </label>
                <input type="text" className={styles.formInput} ref={nameRef} />
              </div>
              <div className={"col-sm "}>
                <label
                  style={{ paddingTop: "1rem" }}
                  className={"d-block " + styles.formLabel}
                >
                  {emailLabel}
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  ref={emailRef}
                />
              </div>
            </div>
            <div className={"form-row " + styles.formGroup}>
              <div className={"col "}>
                <label className={"d-block " + styles.formLabel}>
                  {companyLabel}
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  ref={companyRef}
                />
              </div>
            </div>
            <div className={"form-row " + styles.formGroup}>
              <div className={"col "}>
                <label className={"d-block " + styles.formLabel}>
                  {messageLabel}
                </label>
                <textarea
                  ref={textAreaRef}
                  style={{ resize: "none" }}
                  className={styles.formInput}
                ></textarea>
              </div>
            </div>
            <div className={"form-row " + styles.submitButtonRow}>
              <div className={"col col-sm " + styles.submitButtonColumn}>
                <button
                  onClick={submitForm}
                  className={"btn btn-success " + styles.submitButton}
                >
                  {SubmitText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getAboutPageTiles(): any[] {
  let result: any[] = [];
  result[0] = {
    name: "perfTile",
    url: "performance_icon_mobile_mini.png",
    text: "Fast Performance",
    desc: "With 2 decades of experience with maintaining ERP Systems, our talented employees can deliver even in the most technical of requirements for your business, all in an efficient and effective manner.  ",
  };
  result[1] = {
    name: "innTile",
    url: "lightbulb_mobile.png",
    text: "Innovative Solutions",
    desc: "It’s often said that necessity is the mother of invention, but we believe that innovation is a matter of passion. Our ERP specialists are dedicated specialists who love what they do. You can be sure that your business receives the most talented and creative minds out there.",
  };
  result[2] = {
    name: "flexTile",
    url: "flexible_pricing_icon.png",
    text: "Flexible Pricing",
    desc: "Though our specialists are some of the best, there’s no reason to break the bank when it comes to hiring them. AurumWay offers flexible pricing to create mutual benefit with our partners.",
  };
  return result;
}

function getInfoImgObjects() {
  let result: any[] = [];
  result[0] = {
    src: "SAP-S4-HANA_icon.png",
  };
  result[1] = {
    src: "sap_successfactors_icon.png",
  };
  result[2] = {
    src: "sap_field_glass_icon.png",
  };
  return result;
}
