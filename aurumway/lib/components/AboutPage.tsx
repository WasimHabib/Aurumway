import Link from "next/link";
import React from "react";
import styles from "../../styles/LandingPage.module.css";
export const AboutPage = () => {
  let key = 0;
  let aboutHeader = "About AurumWay";
  let aboutGreeting = "A Pittsburgh Company";
  let ceoHeader = "Meet Our Founder";
  let ceoText2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ligula eu varius commodo. Suspendisse mattis egestas quam, id posuere mi mattis non. Vestibulum imperdiet leo at scelerisque imperdiet. Suspendisse molestie ultricies nisi, nec hendrerit tortor efficitur et. Nam fringilla orci ipsum. Suspendisse pellentesque porttitor feugiat. Nunc a lacus sit amet orci ornare rhoncus. Aliquam rutrum dictum consequat.";
  let insHeader = "Our Inspiration";
  let insText =
    "Curabitur ligula massa, iaculis sodales lacus nec, ultrices consectetur metus. Curabitur et neque nec quam accumsan tincidunt. Nullam in ex massa. Donec eget ex mauris. Mauris quis sapien ex. Cras sed lorem nec dolor molestie tincidunt in a erat. Suspendisse scelerisque sapien sit amet elementum elementum. Donec tempor libero quis laoreet iaculis. Curabitur in lorem molestie, convallis massa ac, blandit augue. Maecenas scelerisque blandit est quis euismod. Morbi nec placerat libero, a laoreet mauris. Sed interdum hendrerit convallis. ";
  let getInTouchText = "Contact Us";
  // let offerHeader = "What We Offer";
  let ceoText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla sodales pulvinar. Pellentesque in finibus mi. Sed tristique, lorem a viverra egestas, nibh diam tincidunt leo, sodales hendrerit tellus ante at est. Aliquam sed orci tellus. Aliquam feugiat odio sed urna sollicitudin dapibus. Cras interdum sem porttitor, varius magna non, rhoncus purus. Suspendisse potenti. Nam eu metus sed mauris eleifend consequat sit amet ut augue. Donec sed laoreet velit, sed facilisis risus. Ut rutrum tincidunt tortor at bibendum. Sed non velit lobortis, gravida nibh eu, aliquam eros. Maecenas convallis vel magna quis vehicula. Sed tincidunt, est sit amet hendrerit commodo, massa urna fermentum metus, vel blandit neque urna et velit. ";
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
            src="pittsburgh_skyline_1.jpg"
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
            src="pittsburgh_skyline_1.jpg"
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
            src="green_tea_leaves_field.jpeg"
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
