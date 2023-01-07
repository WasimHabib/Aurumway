import Link from "next/link";
import React from "react";
import styles from "../../styles/LandingPage.module.css";

export const Footer = () => {
  return (
    <div className={" " + styles.footerContainer}>
      <ul>
        {getListTags().map((val, i) => {
          if (val.listUrl === null) {
            return <li>{val.listText}</li>;
          } else {
            return (
              <Link href={val.listUrl}>
                <li>
                  <a>{val.listText}</a>
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

function getListTags(): any[] {
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
    listUrl: null,
  };

  return result;
}
