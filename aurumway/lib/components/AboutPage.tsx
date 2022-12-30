import React from "react";
import styles from "../../styles/LandingPage.module.css";
export const AboutPage = () => {
  let key = 0;
  let aboutHeader = "About AurumWay";
  let offerHeader = "What We Offer";
  let ceoText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla sodales pulvinar. Pellentesque in finibus mi. Sed tristique, lorem a viverra egestas, nibh diam tincidunt leo, sodales hendrerit tellus ante at est. Aliquam sed orci tellus. Aliquam feugiat odio sed urna sollicitudin dapibus. Cras interdum sem porttitor, varius magna non, rhoncus purus. Suspendisse potenti. Nam eu metus sed mauris eleifend consequat sit amet ut augue. Donec sed laoreet velit, sed facilisis risus. Ut rutrum tincidunt tortor at bibendum. Sed non velit lobortis, gravida nibh eu, aliquam eros. Maecenas convallis vel magna quis vehicula. Sed tincidunt, est sit amet hendrerit commodo, massa urna fermentum metus, vel blandit neque urna et velit. ";
  return (
    <div className={"container-fluid " + styles.aboutOuterContainer}>
      <div
        className={
          "d-flex flex-column align-items-center " + styles.personalInfo
        }
      >
        <h1 className={" " + styles.introHeader}>{aboutHeader}</h1>
        <img
          className={" " + styles.ceoPhoto}
          src="pittsburgh_skyline_1.jpg"
          alt="ceo_picture"
        />
        <div className={" " + styles.textBlurbContainer}>
          <h2 className={" " + styles.textBlurbHeader}>{"How It Started"}</h2>
          <p className={" " + styles.aboutDescription}>{ceoText}</p>
        </div>
      </div>
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
