import React from "react";
import styles from "./Modal.module.css";
import { useQuizContext } from "../store/context";

const Modal = () => {
  const { correct, indexOfQuestion, startOver } = useQuizContext();
  const percent = (correct / indexOfQuestion) * 100;
  // to do button that unables the startform

  return (
    <div className={styles.modalwrapper}>
      <div className={styles.modal}>
        <h1>you answerd {percent.toFixed(0)} of questions correctly </h1>
        <button className={styles.button} onClick={startOver}>
          start again
        </button>
      </div>
    </div>
  );
};

export default Modal;
