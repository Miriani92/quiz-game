import React from "react";
import styles from "./QuizForm.module.css";
import { useQuizContext } from "../store/context";
import Error from "./Error";

const QuizForm = () => {
  const { quizSetup, handleSubmit, error, handleChange } = useQuizContext();

  return (
    <main className={styles.form}>
      <article className={styles.formwrapper}>
        <h1>Quiz</h1>

        <div className={styles.formcontrol}>
          <label htmlFor="number">number of question</label>
          <input
            name="numberOfQuestion"
            type="number"
            id="number"
            value={quizSetup.numberOfQuestion}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formcontrol}>
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
        <div className={styles.formcontrol}>
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
        {error && <Error />}
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={styles.button}
        >
          submit
        </button>
      </article>
    </main>
  );
};

export default QuizForm;
