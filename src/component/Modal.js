import React from "react";
import styles from "./Modal.module.css";
import { useQuizContext } from "../store/context";

const Modal = () => {
  const { correct, indexOfQuestion } = useQuizContext();
  const percent = (correct / indexOfQuestion) * 100;

  return (
    <div>
      <div>
        <h1>you answerd {percent.toFixed(0)} of questions correctly </h1>
      </div>
    </div>
  );
};

export default Modal;
