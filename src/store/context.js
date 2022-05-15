import React, { useState, useEffect, useContext } from "react";

const categoryInNumbers = {
  sports: 21,
  history: 23,
  politics: 24,
};

const URL_START = "https://opentdb.com/api.php?";
//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
const url =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const QuizContext = React.createContext();
export const QuizProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isQuizEntrance, setIsQuizEntrance] = useState(true);
  const [quizSetup, setQuizSetup] = useState({
    numberOfQuestion: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);

  const getQuestions = async (url) => {
    setLoading(true);
    setIsQuizEntrance(false);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const question = data.results;
        setIsQuizEntrance(false);
        setLoading(false);
        setQuestion();
      } else if (question.length < 1) {
        setIsQuizEntrance(true);
      }
    } catch (error) {
      setIsQuizEntrance(true);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.quizSetup.name;
    const value = e.quizSetup.value;

    const url = `${URL_START}amount=${quizSetup["numberOfQuestion"]}&category=${
      categoryInNumbers[quizSetup["category"]]
    } &difficulty=${quizSetup["difficulty"]}&type=multiple`;
    getQuestions(url);
  };

  return (
    <QuizContext.Provider value={{ quizSetup, setQuizSetup }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};

export { QuizContext, useQuizContext };
