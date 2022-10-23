import { gsap } from "gsap"
import { Button } from "../lib/atoms/Button";
import InfoBox from "../lib/components/InfoBox";


function Home() {
  var clickFunc = ({currentTarget}:any): void => {
     let tl = gsap.timeline({});
      tl.fromTo(currentTarget, {
          color: "#FFFFFF",
          scaleX: 1,
          scaleY: 1,
          duration: 0.15,
          ease: "power2.in"
      }, {
          backgroundColor: "#FFC300",
          color: "#000814",
          scaleX: 0.8,
          scaleY: 0.8,
          duration: 0.15,
          borderColor: "#000814",
          ease: "power2.out"
      }, ">")
      tl.fromTo(currentTarget, {
          color: "#000814",
          duration: 0.15,
          scaleX: 0.8,
          scaleY: 0.8,
          ease: "powe2.in"
      }, {
          backgroundColor: "#000814",
          color: "#FFFFFF",
          duration: 0.15,
          scaleX: 1,
          scaleY: 1,
          borderColor: "#FFC300",
          ease: "power2.out"
      }, ">")
      
     tl.play();
  }

  return (
    <>
      <div >
          <Button type="SUCCESS" id="MyButton" text="Click Me" onClick={clickFunc} width="100px" height="50px" className="Button" />
          <InfoBox  width="500px" height="500px" hiddenHeight="150px" hiddenWidth="300px"/>
      </div>
    </>
  );
}

export default Home
