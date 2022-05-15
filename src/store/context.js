import React, { useState, useEffect, useContext } from "react";

const categoryInNumbers = {
  sports: 21,
  history: 23,
  politics: 24,
};

const URL_START = "https://opentdb.com/api.php?";
//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple

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
        const questions = data.results;
        setIsQuizEntrance(false);
        setLoading(false);
        setQuestion(questions);
      } else if (question.length < 1) {
        setIsQuizEntrance(true);
      }
    } catch (error) {
      setIsQuizEntrance(true);
      setError(error.message);
    }
  };
  console.log(question);
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    const name = e.target.name;
    setQuizSetup({ ...quizSetup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { numberOfQuestion, difficulty, category } = quizSetup;
    const url = `${URL_START}amount=${numberOfQuestion}&category=${categoryInNumbers[category]}&difficulty=${difficulty}&type=multiple`;
    getQuestions(url);
  };
  console.log(question);

  return (
    <QuizContext.Provider
      value={{ quizSetup, handleSubmit, error, handleChange }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};

export { QuizContext, useQuizContext };
