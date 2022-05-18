import React from "react";
import Loading from "./component/Loading";
import QuizForm from "./component/QuizForm";
import Quiz from "./component/Quiz";
import Modal from "./component/Modal";
import Error from "./component/Error";
import { useQuizContext } from "./store/context";

function App() {
  const { isQuizEntrance, loading, isModalOpen, error } = useQuizContext();
  let render;
  if (isQuizEntrance || error) {
    return (render = <QuizForm />);
  }

  if (loading) {
    return (render = <Loading />);
  }
  if (isModalOpen) {
    return (render = <Modal />);
  }

  return (
    <div className="app">
      <div>{render}</div>
      {!error && <Quiz />}
    </div>
  );
}

export default App;
