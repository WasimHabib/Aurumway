import React, { useRef } from "react";
import styles from "../../styles/ContactForm.module.css";
import { Button } from "../atoms/Button";
import { sendEmail } from "../services/commonFuncs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = (props: {
  Class: string;
  onCancel: (event: any) => void;
}) => {
  let emailRef = useRef<HTMLInputElement>(null);
  let firstNameRef = useRef<HTMLInputElement>(null);
  let lastNameRef = useRef<HTMLInputElement>(null);
  let messageRef = useRef<HTMLTextAreaElement>(null);
  let loadingRef = useRef<HTMLInputElement>(null);

  function validateAndSend() {
    loadingRef.current!.style.display = "flex";
    sendEmail(
      firstNameRef.current!.value,
      lastNameRef.current!.value,
      emailRef.current!.value,
      messageRef.current!.value
    )
      .then((res) => {
        loadingRef.current!.style.display = "none";
        const successToast = toast.success(
          "Email Sent! Thank you for your business!",
          {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
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
          }
        );
      });
  }

  return (
    <>
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
      <div className={props.Class + " container " + styles.formaContainer}>
        <div className="row">
          <div className={styles.titleContainer}>
            <h1 className={styles.header}>Let's Stay in Touch!</h1>
          </div>
        </div>
        <div className={"row " + styles.rowCont}>
          <div className={styles.rowContent}>
            <div className={styles.inputGroup + " " + styles.divider}>
              <label className={styles.descriptor}>First Name: </label>
              <input
                type="text"
                ref={firstNameRef}
                placeholder="First Name..."
                className={"form-text text-muted " + styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.descriptor}>Last Name: </label>
              <input
                type="text"
                ref={lastNameRef}
                placeholder="Last Name..."
                className={"form-text text-muted " + styles.inputField}
              />
            </div>
          </div>
        </div>
        <div className={"row " + styles.rowCont}>
          <div className={styles.rowContent}>
            <div className={styles.inputGroup}>
              <label className={styles.descriptor}>Email: </label>
              <input
                type="text"
                ref={emailRef}
                placeholder="Your Email..."
                className={"form-text text-muted " + styles.inputField}
              />
            </div>
          </div>
        </div>
        <div className={"row " + styles.rowCont}>
          <div className={styles.rowContent}>
            <div className={styles.inputGroup}>
              <label className={styles.descriptor}>Message: </label>
              <textarea
                ref={messageRef}
                placeholder="Your Message..."
                className={"form-text text-muted " + styles.messageBox}
              ></textarea>
            </div>
          </div>
        </div>
        <div
          className={
            "row " + styles.rowCont + "  flex-grow-1 " + styles.buttonRow
          }
        >
          <div
            className={
              "d-flex align-items-center" + " " + styles.submitContainer
            }
          >
            <Button
              type="INFO"
              text="Submit"
              className={styles.submitButton}
              id="submitButton"
              onClick={validateAndSend}
            />
            <Button
              type="INFO"
              text="Cancel"
              className={styles.submitButton}
              id="submitButton"
              onClick={(event) => {
                props.onCancel(event);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * form-group
 * form-control
 * form-check
 * form-check-input
 * form-text text-muted
 * btn btn-primary
 *
 */

{
  /* <form className={styles.formContainer}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */
}
