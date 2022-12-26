import React, { useLayoutEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendEmail } from "../services/commonFuncs";
import styles from "../../styles/LandingPage.module.css";
export const ContactPage = () => {
  let imgContRef = useRef<HTMLDivElement>(null);
  let imgRef = useRef<HTMLImageElement>(null);
  let parRef = useRef<HTMLParagraphElement>(null);
  let textAreaRef = useRef<HTMLTextAreaElement>(null);
  let formContRef = useRef<HTMLDivElement>(null);
  let bodyRef = useRef<HTMLDivElement>(null);
  let navRef = useRef<HTMLDivElement>(null);
  let introRef = useRef<HTMLDivElement>(null);
  let aboutRef = useRef<HTMLDivElement>(null);
  let contactRef = useRef<HTMLDivElement>(null);
  let nameRef = useRef<HTMLInputElement>(null);
  let companyRef = useRef<HTMLInputElement>(null);
  let emailRef = useRef<HTMLInputElement>(null);
  let loadingRef = useRef<HTMLDivElement>(null);
  let arrVals: any[] = [];
  let titleLabel = "Contact";
  let emailLabel = "Email Address:";
  let nameLabel = "Name:";
  let companyLabel = "Company:";
  let messageLabel = "Message:";
  let SubmitText = "Submit";

  function submitForm() {
    loadingRef.current!.style.display = "flex";
    sendEmail(
      nameRef!.current!.value,
      "",
      emailRef!.current!.value,
      textAreaRef!.current!.value
    )
      .then((res) => {
        loadingRef.current!.style.display = "none";
        const successToast = toast.success(
          "Email Sent! Thank you for your business!",
          {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            hideProgressBar: true,
          }
        );
      })
      .catch((err) => {
        loadingRef.current!.style.display = "none";
        const failureToast = toast.error(
          "Unable to Send Email. Try again in a little bit.",
          {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            hideProgressBar: true,
          }
        );
      })
      .finally(() => {
        loadingRef.current!.style.display = "none";
      });
  }

  useLayoutEffect(() => {
    textAreaRef!.current!.style.height =
      formContRef!.current!.clientHeight / 2 + "px";

    window.addEventListener("resize", () => {
      textAreaRef!.current!.style.height =
        formContRef!.current!.clientHeight / 2 + "px";
    });
  });

  return (
    <div
      ref={contactRef}
      className={"container-fluid " + styles.contactOuterContainer}
    >
      <ToastContainer />
      <div ref={loadingRef} className={styles.overlay}>
        <div className={styles.symbolContainer}>
          <img
            src="loading-76.webp"
            alt="loading.gif..."
            className={styles.spinner}
          />
        </div>
      </div>
      <div className={" " + styles.contactContainer}>
        <div className={"row " + styles.contactTitle}>{titleLabel}</div>
        <div ref={formContRef} className={styles.formContainer}>
          <div className={"row " + styles.formGroup}>
            <div className={"col-sm "}>
              <label
                style={{ paddingTop: "1rem" }}
                className={"d-block " + styles.formLabel}
              >
                {nameLabel}
              </label>
              <input type="text" className={styles.formInput} ref={nameRef} />
            </div>
            <div className={"col-sm "}>
              <label
                style={{ paddingTop: "1rem" }}
                className={"d-block " + styles.formLabel}
              >
                {emailLabel}
              </label>
              <input type="text" className={styles.formInput} ref={emailRef} />
            </div>
          </div>
          <div className={"form-row " + styles.formGroup}>
            <div className={"col "}>
              <label className={"d-block " + styles.formLabel}>
                {companyLabel}
              </label>
              <input
                type="text"
                className={styles.formInput}
                ref={companyRef}
              />
            </div>
          </div>
          <div className={"form-row " + styles.formGroup}>
            <div className={"col "}>
              <label className={"d-block " + styles.formLabel}>
                {messageLabel}
              </label>
              <textarea
                ref={textAreaRef}
                style={{ resize: "none" }}
                className={styles.formInput}
              ></textarea>
            </div>
          </div>
          <div className={"form-row " + styles.submitButtonRow}>
            <div className={"col col-sm " + styles.submitButtonColumn}>
              <button
                onClick={submitForm}
                className={"btn btn-success " + styles.submitButton}
              >
                {SubmitText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
