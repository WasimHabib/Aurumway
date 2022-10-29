import { gsap } from "gsap"
import { Button } from "../lib/atoms/Button";
import InfoBox from "../lib/components/InfoBox";


function Home() {
  let text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var clickFunc = ({currentTarget}:any): void => {
    console.log("clicked button");
  }

  return (
    <>
      <div >
          <Button type="SUCCESS" id="MyButton" text="Click Me" onClick={clickFunc} width="100px" height="50px" className="Button" />
          <div style={{margin: 'auto', maxWidth: '500px'}}>
            <InfoBox  width="500px" height="500px" hiddenHeight="150px" hiddenWidth="300px" hasFooter={true} direction="RIGHT" bodytext={text}/>
          </div>
       
      </div>
    </>
  );
}

export default Home
