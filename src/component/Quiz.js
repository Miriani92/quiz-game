import React, { useState } from "react";
import styles from "./Quiz.module.css";
import { useQuizContext } from "../store/context";
import QuizForm from "./QuizForm";
const Quiz = () => {
  const { questions, indexOfQuestion, chekCorrectAnswers, correct } =
    useQuizContext();
  if (questions.length === 0) {
    return <QuizForm />;
  }
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
    <div className={styles.quizwrap}>
      <div className={styles.questions}>
        <p>
          correct answer:{correct}/{indexOfQuestion}
        </p>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        {allAnswers.map((answer, index) => {
          return (
            <button
              key={index}
              onClick={() => chekCorrectAnswers(answer, correct_answer)}
              className={styles.button}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
