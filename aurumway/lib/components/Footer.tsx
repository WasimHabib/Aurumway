import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";
export const Footer = () => {
  let result = [];
  result[0] = {
    listText: "Contact Us",
    listUrl: "/contact",
  };
  result[1] = {
    listText: "Monday-Sunday 7:00AM-9:00PM EST",
    listUrl: null,
  };
  result[2] = {
    listText: "412-889-0763",
    listUrl: "tel:4128890763",
  };
  result[3] = {
    listText: "wasim.habib@outlook.com",
    listUrl: "mailto:wasim.habib@outlook.com",
  };

  return (
    <div className={" " + styles.footerContainer}>
      <ul>
        <Link href={result[0].listUrl}>
          <li className={"clickableItem"}>{result[0].listText}</li>
        </Link>
        <li>{result[1].listText}</li>
        <Link href={result[3].listUrl}>
          <li className={"clickableItem"}>{result[3].listText}</li>
        </Link>
        <Link href={result[2].listUrl}>
          <li className={"clickableItem"}>{result[2].listText}</li>
        </Link>
      </ul>
    </div>
  );
};
