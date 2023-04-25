import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Quiz from "./Components/Quiz";
function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Quizzzz </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name} />} />
          <Route
            path="/quiz"
            element={<Quiz  setName={setName} />}
          />
        </Routes>
      </Router>
      <p>Learn, Practice ......</p>
    </div>
  );
}

export default App;
