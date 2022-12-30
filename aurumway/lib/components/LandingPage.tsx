import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { sendEmail } from "../services/commonFuncs";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../../styles/LandingPage.module.css";

export const LandingPage = (props: {}) => {
  let headerText = "ERP Solutions";
  let imgContRef = useRef<HTMLDivElement>(null);
  let imgRef = useRef<HTMLImageElement>(null);
  let parRef = useRef<HTMLParagraphElement>(null);
  let bodyRef = useRef<HTMLDivElement>(null);
  let introRef = useRef<HTMLDivElement>(null);
  let arrVals: any[] = [];
  let mainInfoDesc =
    "Our SAP-certified experts deliver comprehensive ERP solutions and support for all of your business needs.";
  let learnMoreText = "Learn More";
  function goToAbout() {
    window.location.href = window.location.href + "/about";
  }
  useLayoutEffect(() => {
    parRef!.current!.style.marginLeft =
      (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
      "px";
    parRef!.current!.style.marginRight =
      (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
      "px";
    window.addEventListener("resize", () => {
      parRef!.current!.style.marginLeft =
        (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
        "px";
      parRef!.current!.style.marginRight =
        (imgContRef!.current!.clientWidth - imgRef!.current!.clientWidth) / 2 +
        "px";
    });
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
                <p ref={parRef} className={"col " + styles.mainInfoDesc}>
                  {mainInfoDesc}
                </p>
              </div>
            </div>
            {/* 
            <div>
                
            </div> 
            */}
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
                goToAbout();
              }}
            >
              {learnMoreText}
            </div>
          </div>
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
