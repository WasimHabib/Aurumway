import { gsap } from "gsap"
import { useLayoutEffect } from "react";
import { Button } from "../lib/atoms/Button";
import InfoBox from "../lib/components/InfoBox";
import { colors } from "../lib/models/contants";


function Home() {
  let text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var clickFunc = ({currentTarget}:any): void => {
    console.log("clicked button");
  }

  useLayoutEffect(() => {
      
  }, []);

  return (
    <>
    <div style={BackDropStyles} className='container' >
        <div style={EntranceStyles} className='scroll-area'>1</div>
        <div style={MainStyles} className='scroll-area'>2</div>
        <div style={ContactStyles} className='scroll-area'>3</div>
    </div>

      {/* <div >
          <Button type="SUCCESS" id="MyButton" text="Click Me" onClick={clickFunc} width="100px" height="50px" className="Button" />
          <div style={{margin: 'auto', maxWidth: '500px'}}>
            <InfoBox  width="500px" height="500px" hiddenHeight="150px" hiddenWidth="300px" hasFooter={true} direction="RIGHT" bodytext={text}/>
          </div>
       
      </div> */}
    </>
  );
}

var EntranceStyles: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'green',
    scrollSnapAlign: 'start'
}

var MainStyles = {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'blue',
  scrollSnapAlign: 'center'
}

var ContactStyles = {
  width: '100%',
  height: '100vh',
  backgroundColor: 'red',
  scrollSnapAlign: 'start'
}

var BackDropStyles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.colorPrimary
}

export default Home
