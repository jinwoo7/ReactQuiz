import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {("0" + mins).slice(-2)}:{("0" + seconds).slice(-2)}
    </div>
  );
}

export default Timer;
