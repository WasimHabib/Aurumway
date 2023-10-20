import Link from "next/link";
import React from "react";
import styles from "../../styles/LandingPage.module.css";
export const AboutPage = () => {
  let key = 0;
  let aboutHeader = "About AurumWay";
  let aboutGreeting = "A Pittsburgh Company";
  let ceoHeader = "Meet Our Founder";
  let ceoText2 = "";
  let insHeader = "Our Inspiration";
  let insText = "";
  let getInTouchText = "Contact Us";
  let ceoText = "";
  return (
    <div className={"container-fluid " + styles.aboutOuterContainer}>
      <div className={" " + styles.aboutGreetingContainer}>
        <h1 className={" " + styles.aboutGreetingHeader}>{aboutGreeting}</h1>
      </div>

      <div className={" " + styles.personalInfo}>
        {/* <h1 className={" " + styles.introHeader}>{aboutHeader}</h1> */}
        <div className={" " + styles.personalImgContainer}>
          <img
            className={" " + styles.ceoPhoto}
            src="/pittsburgh_skyline_1.jpg"
            alt="pittsburgh_skyline"
          />
        </div>

        <div className={" " + styles.textBlurbContainer}>
          <h2 className={" " + styles.textBlurbHeader}>{"How It Started"}</h2>
          <p className={" " + styles.aboutDescription}>{ceoText}</p>
        </div>
      </div>

      <div
        className={" " + styles.personalInfo + " " + styles.personalInfoReverse}
      >
        {/* <h1 className={" " + styles.introHeader}>{aboutHeader}</h1> */}
        <div className={" " + styles.personalImgContainer}>
          <img
            className={" " + styles.ceoPhoto + " " + styles.ceoPhotoReverse}
            src="/pittsburgh_skyline_1.jpg"
            alt="ceo_picture"
          />
        </div>

        <div className={" " + styles.textBlurbContainer}>
          <h2 className={" " + styles.textBlurbHeader}>{ceoHeader}</h2>
          <p className={" " + styles.aboutDescription}>{ceoText2}</p>
        </div>
      </div>

      <div className={" " + styles.personalInfo}>
        {/* <h1 className={" " + styles.introHeader}>{aboutHeader}</h1> */}
        <div className={" " + styles.personalImgContainer}>
          <img
            className={" " + styles.ceoPhoto}
            src="/green_tea_leaves_field.jpeg"
            alt="ceo_picture"
          />
        </div>

        <div className={" " + styles.textBlurbContainer}>
          <h2 className={" " + styles.textBlurbHeader}>{insHeader}</h2>
          <p className={" " + styles.aboutDescription}>{insText}</p>
        </div>
      </div>

      <Link href="/contact">
        <div className={" " + styles.getInTouchContainer}>
          <p className="mb-0 ">{getInTouchText}</p>
        </div>
      </Link>
    </div>
  );
};
