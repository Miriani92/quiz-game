import React from "react";
import Loading from "./component/Loading";
import QuizForm from "./component/QuizForm";
import Quiz from "./component/Quiz";
import Modal from "./component/Modal";
import { useQuizContext } from "./store/context";

function App() {
  const { isQuizEntrance, loading, isModalOpen } = useQuizContext();
  if (isQuizEntrance) {
    return <QuizForm />;
  }

  if (loading) {
    return <Loading />;
  }
  if (isModalOpen) {
    return <Modal />;
  }

  return (
    <div className="App">
      <h1> hello from the app</h1>
      <Quiz />
    </div>
  );
}

export default App;
