import ProgressBar from "react-bootstrap/ProgressBar";

function Progress({ currentQuestion, totalQuestion }) {
  const now = (currentQuestion / totalQuestion) * 100;
  console.log(typeof currentQuestion);
  console.log(typeof totalQuestion);

  return <ProgressBar striped variant="danger" now={now} label={`${now}%`} />;
}

export default Progress;
