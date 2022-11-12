import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/InfoBox.module.css";
import { gsap } from "gsap";
import { colors } from "../models/contants";

export default function InfoBox(props: {
  width: string;
  height: string;
  hiddenWidth: string;
  hiddenHeight: string;
  hasFooter: boolean;
  direction: "LEFT" | "RIGHT";
  bodytext: string;
  initialOpen: boolean;
  Class?: string;
}) {
  let [isExpanded, setIsExpanded] = useState(false);
  let containerRef = useRef(null);
  let headerRef = useRef(null);
  let footerRef = useRef(null);
  let iconRef = useRef(null);
  let titleRef = useRef(null);
  let overlayRef = useRef(null);
  let bodyTextRef = useRef(null);
  let bodyRef = useRef(null);
  let bodyAnimDuration = 0.7;
  let iconAnimDuration = 0.7;
  let delayedTextAnimDur = 0.4;
  let rotationDir = props.direction == "LEFT" ? -360 : 360;
  let title = props.direction == "LEFT" ? styles.titleLeft : styles.titleRight;

  let inlineStyle: React.CSSProperties = {
    width: props.hiddenWidth,
    height: props.hiddenHeight,
    direction: props.direction == "LEFT" ? "ltr" : "rtl",
    float: props.direction == "LEFT" ? "left" : "right",
  };

  let iconStyle: React.CSSProperties = {
    float: props.direction == "LEFT" ? "right" : "left",
  };

  let headerStyle: React.CSSProperties = {
    height: props.hasFooter ? "25%" : "25%",
    maxHeight: "3rem",
    backgroundColor: colors.colorPrimary,
    cursor: "pointer",
  };
  let bodyStyle: React.CSSProperties = {
    height: props.hasFooter ? "70%" : "75%",
    backgroundColor: colors.colorTertiary,
    overflow: "hidden",
  };

  useLayoutEffect(() => {
    if (props.initialOpen) {
      toggleInfoBox();
    }
  }, []);

  function toggleInfoBox(): any {
    let tl = gsap.timeline();

    if (isExpanded == true) {
      setIsExpanded(false);

      //expand body
      tl.fromTo(
        containerRef.current,
        {
          width: props.width,
          height: props.height,
          duration: bodyAnimDuration,
          ease: "power2.in",
        },
        {
          width: props.hiddenWidth,
          height: props.hiddenHeight,
          duration: bodyAnimDuration,
          ease: "power2.in",
        },
        0
      );
      tl.fromTo(
        bodyRef.current,
        {
          width: "100%",
          ease: "power2.in",
          duration: bodyAnimDuration,
        },
        {
          width: props.hiddenWidth,
          ease: "power2.in",
          duration: bodyAnimDuration,
        },
        0
      );
      //expand header
      tl.fromTo(
        headerRef.current,
        {
          width: "100%",
          duration: bodyAnimDuration,
          backgroundColor: colors.colorQuarternary,
          ease: "power2.in",
        },
        {
          width: props.hiddenWidth,
          duration: bodyAnimDuration,
          backgroundColor: colors.colorPrimary,
          ease: "power2.in",
        },
        0
      );

      //expand footer
      if (props.hasFooter && footerRef != null) {
        tl.fromTo(
          footerRef.current,
          {
            width: "100%",
            duration: bodyAnimDuration,
            ease: "power2.in",
          },
          {
            width: props.hiddenWidth,
            duration: bodyAnimDuration,
            ease: "power2.in",
          },
          0
        );
      }

      //rotate cog
      tl.fromTo(
        iconRef.current,
        {
          rotate: 0,
          duration: iconAnimDuration,
          src: "/cog.png",
          ease: "linear",
        },
        {
          rotate: rotationDir,
          duration: iconAnimDuration,
          src: "/cog_golden.png",
          ease: "linear",
        },
        0
      );

      tl.fromTo(
        titleRef.current,
        {
          color: colors.colorPrimary,
          ease: "power2.out",
        },
        {
          color: colors.colorPentiary,
          ease: "power2.out",
        },
        0
      );
      tl.fromTo(
        overlayRef.current,
        {
          opacity: 0,
          zIndex: -1,
          ease: "power2.in",
        },
        {
          opacity: 1,
          zIndex: 3,
          ease: "power2.in",
        },
        0
      );
      tl.fromTo(
        bodyTextRef.current,
        {
          opacity: 1,
          duration: 0.1,
          ease: "power2.in",
        },
        {
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        },
        0
      );
    } else {
      setIsExpanded(true);
      tl.fromTo(
        containerRef.current,
        {
          width: props.hiddenWidth,
          height: props.hiddenHeight,
          duration: bodyAnimDuration,
          ease: "power2.out",
        },
        {
          width: props.width,
          height: props.height,
          duration: bodyAnimDuration,
          ease: "power2.out",
        },
        0
      );

      tl.fromTo(
        bodyRef.current,
        {
          width: props.hiddenWidth,
          duration: bodyAnimDuration,
          ease: "power2.out",
        },
        {
          width: "100%",
          duration: bodyAnimDuration,
          ease: "power2.out",
        },
        0
      );
      tl.fromTo(
        headerRef.current,
        {
          width: props.hiddenWidth,
          duration: bodyAnimDuration,
          backgroundColor: colors.colorPrimary,
          ease: "power2.out",
        },
        {
          width: "100%",
          duration: bodyAnimDuration,
          backgroundColor: colors.colorQuarternary,
          ease: "power2.out",
        },
        0
      );

      if (props.hasFooter && footerRef != null) {
        tl.fromTo(
          footerRef.current,
          {
            width: props.hiddenWidth,
            duration: bodyAnimDuration,
            ease: "power2.out",
          },
          {
            width: "100%",
            duration: bodyAnimDuration,
            ease: "power2.out",
          },
          0
        );
      }

      tl.fromTo(
        iconRef.current,
        {
          rotate: 0,
          duration: iconAnimDuration,
          src: "/cog_golden.png",
          ease: "linear",
        },
        {
          rotate: -rotationDir,
          duration: iconAnimDuration,
          src: "/cog.png",
          ease: "linear",
        },
        0
      );

      tl.fromTo(
        titleRef.current,
        {
          color: colors.colorPentiary,
          ease: "power2.in",
        },
        {
          color: colors.colorPrimary,
          ease: "power2.in",
        },
        0
      );

      tl.fromTo(
        overlayRef.current,
        {
          opacity: 1,
          zIndex: 3,
          ease: "power2.in",
        },
        {
          opacity: 0,
          zIndex: -1,
          ease: "power2.in",
        },
        0
      );

      tl.fromTo(
        bodyTextRef.current,
        {
          opacity: 0,
          ease: "power2.in",
        },
        {
          opacity: 1,
          ease: "power2.in",
        },
        delayedTextAnimDur
      );
    }
  }

  if (props.hasFooter) {
    return (
      <div
        ref={containerRef}
        className={props.Class + " " + styles.container}
        style={inlineStyle}
      >
        <div
          ref={headerRef}
          className={styles.header}
          style={headerStyle}
          onClick={toggleInfoBox}
        >
          <img
            className={styles.headerIcon}
            style={iconStyle}
            ref={iconRef}
            src="/cog_golden.png"
          />
          <div className={styles.titleContainer}>
            <span ref={titleRef} className={title}>
              This is the title
            </span>
          </div>
        </div>
        <div ref={bodyRef} className={styles.body} style={bodyStyle}>
          <div ref={overlayRef} className={styles.overlay}>
            <span className={styles.title}> Click to Expand </span>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text} ref={bodyTextRef}>
              {props.bodytext}
            </p>
          </div>
        </div>

        <div
          ref={footerRef}
          className={styles.footer}
          style={{
            height: "15%",
            maxHeight: "2rem",
            backgroundColor: colors.colorQuarternary,
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className={styles.container} style={inlineStyle}>
        <div
          ref={headerRef}
          className={styles.header}
          style={headerStyle}
          onClick={toggleInfoBox}
        >
          <img
            className={styles.headerIcon}
            style={iconStyle}
            ref={iconRef}
            src="/cog_golden.png"
          />
          <div className={styles.titleContainer}>
            <span ref={titleRef} className={title}>
              This is the title
            </span>
          </div>
        </div>
        <div ref={containerRef} className={styles.body} style={bodyStyle}>
          <div ref={overlayRef} className={styles.overlay}>
            <span className={styles.title}> Click to Expand </span>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text} ref={bodyTextRef}>
              {props.bodytext}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
