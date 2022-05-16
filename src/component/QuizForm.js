import React from "react";
import styles from "./QuizForm.module.css";
import { useQuizContext } from "../store/context";

const QuizForm = () => {
  const { quizSetup, handleSubmit, error, handleChange } = useQuizContext();

  return (
    <main>
      <div>
        <label htmlFor="number">number of question</label>
        <input
          name="numberOfQuestion"
          type="number"
          id="number"
          value={quizSetup.numberOfQuestion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">category</label>
        <select
          id="category"
          name="category"
          value={quizSetup.category}
          onChange={handleChange}
        >
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty"> difficulty</label>
        <select
          id="difficulty"
          name="difficulty"
          value={quizSetup.difficulty}
          onChange={handleChange}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={styles.button}
      ></button>
    </main>
  );
};

export default QuizForm;
