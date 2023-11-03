import QuizResult from "./QuizResult";
import Data from "../Data.json";
import { useState } from "react";
import "../CssFiles/Quiz.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Progress from "./Progress";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < Data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption("");
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === Data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption("");
    setScore(0);
  };
  return (
    <Container fluid className="outerContainer-1">
      <Progress
        currentQuestion={showResult ? currentQuestion + 1 : currentQuestion}
        totalQuestion={Data.length}
      />
      <Container
        style={{
          height: "15vh",
        }}
      >
        <Row>
          <Col className="heading-txt">Quiz APP </Col>
        </Row>
      </Container>
      <Container>
        <div>
          <div className="quizBox">
            {showResult ? (
              <>
                <QuizResult
                  score={score}
                  totalScore={Data.length}
                  tryAgain={resetAll}
                />
                <Button id="next-button" onClick={resetAll}>
                  Try Again
                </Button>
              </>
            ) : (
              <>
                <div className="question">
                  <span id="question-number">{currentQuestion + 1}. </span>
                  <span id="question-txt">
                    {Data[currentQuestion].question}
                  </span>
                </div>
                <div className="option-container">
                  {Data[currentQuestion].options.map((option, i) => {
                    return (
                      <button
                        className={`option-btn ${
                          clickedOption === option ? "checked" : null
                        }`}
                        key={i}
                        onClick={() => setClickedOption(option)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <Button id="next-button" onClick={changeQuestion}>
                  Next
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
}
export default Quiz;
