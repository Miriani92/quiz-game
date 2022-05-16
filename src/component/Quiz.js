import React, { useState } from "react";
import styles from "./Quiz.module.css";
import { useQuizContext } from "../store/context";

const Quiz = () => {
  const [button, setButton] = useState("");
  const { questions, indexOfQuestion, chekCorrectAnswers, correct } =
    useQuizContext();

  const { category, correct_answer, difficulty, incorrect_answers, question } =
    questions[indexOfQuestion];

  const allAnswers = [...incorrect_answers, correct_answer];
  let randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber !== 3) {
    let prevValue = allAnswers[randomNumber];
    allAnswers[randomNumber] = correct_answer;
    allAnswers[3] = prevValue;
  }

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: question }} />
      {allAnswers.map((answer, index) => {
        return (
          <button
            key={index}
            value={button}
            onClick={() => chekCorrectAnswers(answer, correct_answer)}
            className={styles.button}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default Quiz;
