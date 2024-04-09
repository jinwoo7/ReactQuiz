import { useQuiz } from "../context/QuizContext";

function Options() {
  const { questions, index, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${
            hasAnswered
              ? idx === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
