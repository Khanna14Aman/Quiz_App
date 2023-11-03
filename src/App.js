import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./Screens/Quiz";
import NotFound from "./Screens/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Quiz />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
