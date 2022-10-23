import React, { useRef, useState } from 'react'
import styles from '../../styles/InfoBox.module.css';
import { gsap } from "gsap"


export default function InfoBox(props: {width: string, height: string, hiddenWidth: string, hiddenHeight: string}) {
    let hidWidth = props.hiddenWidth;
    let hidHeight = props.hiddenHeight;
    let [isExpanded, setIsExpanded] = useState(false);
    let containerRef = useRef(null);
    let headerRef = useRef(null);

    let inlineStyle = {
        width: props.hiddenWidth,
        height: props.hiddenHeight
    };


    function toggleInfoBox(): any {
        let tl = gsap.timeline();
        // console.log(isExpanded);
        if(isExpanded == true) {
            // console.log(containerRef);
            setIsExpanded(false);
            tl.fromTo(containerRef.current, {
                width: props.width,
                height: props.height,
                duration: 0.2
            }, {
                width: props.hiddenWidth,
                height: props.hiddenHeight,
                duration: 0.2
            }, 0);
          
            tl.fromTo(headerRef.current, {
                width: props.width,
                duration: 0.2
            }, {
               
                width: props.hiddenWidth,
                duration: 0.2
            }, 0);
        }
        else {
            setIsExpanded(true);
            tl.fromTo(containerRef.current, {
                width: props.hiddenWidth,
                height: props.hiddenHeight,
                duration: 0.2
            }, {
                width: props.width,
                height: props.height,
                duration: 0.2
               
            }, 0);

            tl.fromTo(headerRef.current, {
                width: props.hiddenWidth,
                duration: 0.2
            }, {
                width: props.width,
                duration: 0.2
            }, 0);
          
            
        }
    }





  return (
    <div className={styles.container} style={inlineStyle}>
           
            <div ref={headerRef} className={styles.header}>
                <img className={styles.headerIcon} src="/cog.png" onClick={toggleInfoBox} />
            </div>
            <div ref={containerRef} className={styles.body}>

            </div>
            <div className={styles.footer}>

            </div>
    </div>
  )
}
