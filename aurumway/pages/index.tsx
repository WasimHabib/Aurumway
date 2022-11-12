import { gsap } from "gsap";
import { CSSProperties, useLayoutEffect, useRef } from "react";
import { Button } from "../lib/atoms/Button";
import InfoBox from "../lib/components/InfoBox";
import { Form } from "../lib/components/ContactForm";
import { onSubmit } from "../lib/services/commonFuncs";
import { colors } from "../lib/models/contants";
import { DetailsBox } from "../lib/components/DetailsBox";

function Home() {
  let text =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let backDropRef = useRef<HTMLDivElement>(null);
  let entranceRef = useRef<HTMLDivElement>(null);
  let mainRef = useRef<HTMLDivElement>(null);
  let headerText = "Welcome to Aurumway";
  let detailsText1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  let detailsText2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui vivamus arcu. In hac habitasse platea dictumst vestibulum rhoncus. Scelerisque eu ultrices vitae auctor eu augue. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Sapien eget mi proin sed libero. ";
  let detailsText3 =
    "Varius morbi enim nunc faucibus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Enim lobortis scelerisque fermentum dui faucibus in ornare.";
  let infoText =
    "Urna porttitor rhoncus dolor purus. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae nunc sed velit dignissim sodales ut eu sem. Platea dictumst vestibulum rhoncus est. Curabitur vitae nunc sed velit dignissim. Etiam sit amet nisl purus in. Scelerisque purus semper eget duis at.";
  let contactRef = useRef<HTMLDivElement>(null);
  let ceoText =
    "Urna porttitor rhoncus dolor purus. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae nunc sed velit dignissim sodales ut eu sem. Platea dictumst vestibulum rhoncus est.";
  var clickFunc = ({ currentTarget }: any): void => {
    console.log("clicked button");
  };

  function scrollPage(index: number) {
    switch (index) {
      case 0:
        backDropRef.current?.scrollTo({
          behavior: "smooth",
          top: 0,
        });
        break;
      case 1:
        backDropRef.current?.scrollTo({
          behavior: "smooth",
          top: entranceRef.current?.clientHeight,
        });
        break;
      case 2:
        backDropRef.current?.scroll({
          behavior: "smooth",
          top: entranceRef.current?.clientHeight! * 2,
        });
        break;
    }
  }

  useLayoutEffect(() => {
    const introTimeline = gsap.timeline({
      delay: 0.5,
      repeat: 0,
    });

    introTimeline.play();
  }, []);

  return (
    <>
      <h1 className="phoneMessage">
        Please Open the Website on a Desktop, Laptop, or Tablet{" "}
      </h1>
      <div className="phoneHider">
        <div className="navMain">
          <img
            src="potential_map_gold_logo.jpg"
            alt=""
            className="companyLogo"
          />
          <Button
            type="INFO"
            id=""
            className="navButton"
            text="Home"
            onClick={() => {
              scrollPage(0);
            }}
          />
          <Button
            type="INFO"
            id=""
            className="navButton"
            text="About"
            onClick={() => {
              scrollPage(1);
            }}
          />
          <Button
            type="INFO"
            id=""
            className="navButton"
            text="Contact"
            onClick={() => {
              scrollPage(2);
            }}
          />
        </div>
        <div ref={backDropRef} style={BackDropStyles} className="cont">
          <div ref={entranceRef} style={EntranceStyles} className="scroll-area">
            <img src="balldrop.png" alt="" className="balldrop" />
            <div className="imgContainer">
              <div className="pittsburghimg"></div>
            </div>
            <div className="headerContainer">
              <h1 className="indexHeader">{headerText}</h1>
            </div>
            <div className="infoTextContainer">
              <h2 className="infoText">{infoText}</h2>
            </div>
            <div className="detailsContainer">
              <div className="dbcont">
                <DetailsBox className="detailsBox" bodytext={detailsText1} />
              </div>
              <div className="dbcont">
                <DetailsBox className="detailsBox" bodytext={detailsText2} />
              </div>
              <div className="dbcont">
                <DetailsBox className="detailsBox" bodytext={detailsText3} />
              </div>
            </div>
            <div className="scrollBelowContainer"></div>
          </div>
          <div ref={mainRef} style={MainStyles} className="scroll-area">
            <div className={"profileDiv"}>
              <div className={"profile"}></div>
              <p className={"ceoDescription"}>
                <i>{ceoText}</i>
              </p>
            </div>
            <div className={"middleDiv"}>
              <div className={"infoContainer"}>
                <InfoBox
                  Class="infoBox"
                  width="90%"
                  height="70%"
                  hiddenHeight="150px"
                  hiddenWidth="300px"
                  hasFooter={true}
                  direction="RIGHT"
                  bodytext={text}
                  initialOpen={false}
                />
              </div>
              <div className={"infoContainer"}>
                <InfoBox
                  Class="infoBox"
                  width="90%"
                  height="70%"
                  hiddenHeight="150px"
                  hiddenWidth="300px"
                  hasFooter={true}
                  direction="RIGHT"
                  bodytext={text}
                  initialOpen={false}
                />
              </div>
            </div>
          </div>
          <div
            ref={contactRef}
            style={ContactStyles}
            className="scroll-area d-flex"
          >
            <div className={"formContainer"}>
              <Form onCancel={() => scrollPage(0)} Class="contactForm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

var EntranceStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",
  scrollSnapAlign: "start",
};

var MainStyles = {
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",
  scrollSnapAlign: "center",
  display: "flex",
};

var ContactStyles = {
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",
  scrollSnapAlign: "start",
};

var BackDropStyles: CSSProperties = {
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.colorPrimary,
  position: "relative",
};

export default Home;

{
  /* <DetailsBox height="200px" width="200px" bodytext="Hello World" /> */
}

{
  /* <Button type="INFO" id="" className='' text="Hello" onClick = {() => {console.log("Hello World!")}} height="50px" width="100px"/>
    <Form  onSubmit={ onSubmit }/>  */
}

{
  /*  <div>
        <Button
          type="SUCCESS"
          id="MyButton"
          text="Click Me"
          onClick={clickFunc}
          width="100px"
          height="50px"
          className="Button"
        />
        <div
          style={{
            margin: "auto",
            backgroundColor: "pink",
            maxWidth: "800px",
          }}
        >
          <InfoBox
            initialOpen={false}
            width="90%"
            height="200px"
            hiddenHeight="150px"
            hiddenWidth="300px"
            hasFooter={true}
            direction="RIGHT"
            bodytext={text}
          />
        </div>
      </div>*/
}
