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
  const [questions, setQuestions] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);

  const getQuestions = async (url) => {
    setLoading(true);
    setIsQuizEntrance(false);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const questions = data.results;
        if (questions.length === 0) {
          setLoading(false);
          setIsQuizEntrance(true);
          setError(true);
        } else {
          setIsQuizEntrance(false);
          setLoading(false);
          setQuestions(questions);
        }
      }
    } catch (error) {
      setIsQuizEntrance(true);
      setError(true);
    }
  };
  const startOver = () => {
    setIsModalOpen(false);
    setError(false);
    setIsQuizEntrance(true);
    setIndexOfQuestion(0);
    setCorrect(0);
  };

  const nextQuestion = () => {
    let nextQuestionIndex = indexOfQuestion + 1;
    if (nextQuestionIndex > questions.length - 1) {
      setIsModalOpen(true);
    }
    return setIndexOfQuestion(nextQuestionIndex);
  };
  const chekCorrectAnswers = (value, correctAnswer) => {
    if (value === correctAnswer) {
      setCorrect(correct + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    setError(false);
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setQuizSetup({ ...quizSetup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { numberOfQuestion, difficulty, category } = quizSetup;
    const url = `${URL_START}amount=${numberOfQuestion}&category=${categoryInNumbers[category]}&difficulty=${difficulty}&type=multiple`;
    getQuestions(url);
  };

  return (
    <QuizContext.Provider
      value={{
        isQuizEntrance,
        loading,
        quizSetup,
        handleSubmit,
        error,
        handleChange,
        isModalOpen,
        chekCorrectAnswers,
        questions,
        indexOfQuestion,
        correct,
        setCorrect,
        startOver,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};

export { QuizContext, useQuizContext };
