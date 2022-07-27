import { useState } from "react";
import "./App.css";
import Questions from "./assets/Questions";

function App() {
  const [qstnIdx, setQstnIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const currentQuestion = Questions[qstnIdx];

  const selectOption = (idx) => {
    if (currentQuestion.answer === idx) {
      setScore(score + 1);
    }
    const nextQ = qstnIdx + 1;
    if (nextQ < Questions.length) {
      setQstnIdx(qstnIdx + 1);
    } else {
      setShowScore(true);
    }
  };

  const reset = () => {
    setQstnIdx(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="scorecard">
          <h1 className="urscore">Your Score is : {score}/ 10</h1>
          <button className="restartbtn" onClick={reset}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-container-questions">
          <p>{currentQuestion.question}</p>
          <div className="quiz-container-options">
            <ul className="quiz-container-ul">
              {currentQuestion.options.map((options, i) => {
                return (
                  <li
                    className="quiz-container-li"
                    onClick={() => selectOption(i)}
                  >
                    {options}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
