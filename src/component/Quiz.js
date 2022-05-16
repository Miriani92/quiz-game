import React from "react";
import styles from "./Quiz.module.css";
import { useQuizContext } from "../store/context";

const Quiz = () => {
  const { questions, indexOfQuestion, nextQuestion, muteli } = useQuizContext();
  const { category, correct_answer, difficulty, incorrect_answer, question } =
    questions[indexOfQuestion];

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: question }} />
      <button onClick={nextQuestion} className={styles.button}></button>
      <button onClick={nextQuestion} className={styles.button}></button>
      <button onClick={nextQuestion} className={styles.button}></button>
      <button onClick={nextQuestion} className={styles.button}></button>
    </div>
  );
};

export default Quiz;
