import React from "react";
import styles from "./QuizForm.module.css";
import { useQuizContext } from "../store/context";

const QuizForm = () => {
  const { quizSetup, setQuizSetup } = useQuizContext();
  console.log(quizSetup.numberOfQuestion);

  return (
    <main>
      <div>
        <label htmlFor="number">number of question</label>
        <input
          type="number"
          id="number"
          value={quizSetup.numberOfQuestion}
          onChange={inputChange}
        />
      </div>
      <div></div>
      <div></div>
    </main>
  );
};

export default QuizForm;
