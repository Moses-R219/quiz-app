import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Quiz from "./Components/Quiz";
function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name} />} />
          <Route
            path="/quiz"
            element={<Quiz startTimer={startTimer} setName={setName} />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
