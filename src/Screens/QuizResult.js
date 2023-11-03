import { Button, Container } from "react-bootstrap";
import "../CssFiles/QuizResult.css";

function QuizResult({ score, totalScore, tryAgain }) {
  return (
    <Container className="show-score">
      Your Score:{score}
      <br />
      Total Score:{totalScore}
    </Container>
  );
}

export default QuizResult;
