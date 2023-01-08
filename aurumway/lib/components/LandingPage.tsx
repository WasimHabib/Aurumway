import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sendEmail } from "../services/commonFuncs";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../../styles/LandingPage.module.css";
import Link from "next/link";

export const LandingPage = (props: {}) => {
  let headerText = "ERP Solutions";
  let imgContRef = useRef<HTMLDivElement>(null);
  let imgRef = useRef<HTMLImageElement>(null);
  let parRef = useRef<HTMLParagraphElement>(null);
  let bodyRef = useRef<HTMLDivElement>(null);
  let introRef = useRef<HTMLDivElement>(null);
  const [marginSide, setMarginSide] = useState("20px");
  let arrVals: any[] = [];
  let offerHeader = "What We Offer";
  let landingHeader = "What We Do";
  let landingText1 =
    "Proin a justo ex. Curabitur sit amet lobortis quam, vel luctus justo. Quisque vitae ultricies ipsum. Maecenas ac tellus sed nisi finibus fermentum.";
  let landingText2 =
    "Curabitur ut scelerisque lorem, in sagittis nulla. Donec blandit nulla odio, sit amet mattis massa hendrerit nec. Ut at nunc ornare, malesuada arcu non, porttitor orci.";
  let key = 0;
  let mainInfoDesc =
    "Our SAP-certified experts deliver comprehensive ERP solutions and support for all of your business needs.";
  let learnMoreText = "Learn More";

  useEffect(() => {
    const onResize = () => {
      if (
        imgRef?.current?.clientWidth !== undefined &&
        imgContRef?.current?.clientWidth !== undefined
      ) {
        let val =
          (imgContRef?.current?.clientWidth - imgRef?.current?.clientWidth) /
            2 +
          "px";
        setMarginSide(val);
      }
    };
    window.addEventListener("resize", onResize);
  });
  return (
    <div ref={bodyRef}>
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
          <div className={"col " + styles.slideContainer}>
            <Splide
              hasTrack={false}
              className={" " + styles.splideRoot}
              options={{
                classes: {
                  arrows: "splide__arrows ",
                  arrow: "splide__arrow ",
                  prev: "splide__arrow--prev ",
                  next: "splide__arrow--next ",
                },
              }}
            >
              <SplideTrack className={" " + styles.splideTrack}>
                <SplideSlide className={" " + styles.splideSlide}>
                  <img
                    className={styles.stockImg}
                    src="tech_stock_laptop.jpg"
                    alt="tech stock laptop"
                  />
                </SplideSlide>
                <SplideSlide className={" " + styles.splideSlide}>
                  <img
                    className={styles.stockImg}
                    src="pittsburgh_skyline_1.jpg"
                    alt="tech stock laptop"
                  />
                </SplideSlide>
              </SplideTrack>
            </Splide>
          </div>
          <div
            className={
              "col d-flex justify-content-center " + styles.imageContainer
            }
          >
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
                <p
                  style={{ marginLeft: marginSide, marginRight: marginSide }}
                  className={"col " + styles.mainInfoDesc}
                >
                  {mainInfoDesc}
                </p>
              </div>
            </div>
            <div className={" " + styles.landoContainer}>
              <img
                src="landingImage.jpeg"
                alt="landing_description_box"
                className={" " + styles.landoImage}
              />
              <div className={" " + styles.landoTextContainer}>
                <h2 className={" " + styles.landoHeader}>{landingHeader}</h2>
                <p className={"py-2 " + styles.aboutDescription}>
                  {landingText1}
                </p>
                <p className={"py-2 " + styles.aboutDescription}>
                  {landingText2}
                </p>
              </div>
            </div>
            {/* <div className={" " + styles.mainInfoContainerDesktop}>
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className={"row " + styles.offerText}>
          <h1 className={" " + styles.introHeader}>{offerHeader}</h1>
        </div>
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
        <div className={"row " + styles.arwButtonContainer}>
          <Link href="/about">
            <div className={"col mb-3"}>
              <div className={styles.arwButton}>{learnMoreText}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

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
