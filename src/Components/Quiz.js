import React, { useState } from "react";
import { quizQuestions } from "../QuizData/quizdata";
import { useNavigate } from "react-router-dom";

const Quiz = ({  setName }) => {
  const [qNumber, setQNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);
  const [clickedAnswer, setclickedAnswer] = useState(0);
  const correc=(istrue)=>{
    if(istrue)
      return true;
  }

  const navigate = useNavigate();

  const selectedAnswer = (selected, id) => {

    setclickedAnswer(id);

    setTimeout(() => {
      const nextQ = qNumber + 1;
      console.log(clickedAnswer);
      setclickedAnswer(0);
      if (nextQ < quizQuestions.length) {
        setQNumber(nextQ);
      }
      if (nextQ === quizQuestions.length) {
        setDisplayScore(true);
      }
      if (selected === true) {
        {quizQuestions[nextQ].answers.map((ans,i)=>{
          return(
            <button key={i} onClick={correc(ans.isCorrect)}>{ans.isCorrect}</button>
          )
        })
         
        }
        setScore((score) => score + 1);
      }

    }, 600);
  };

  return (
    <div className="Main_Div">
      <div className="Quiz_Div">
        {displayScore ? (
          <>
            <p>
              Your score : {score} / {quizQuestions.length}
            </p>
            <div className="buttons_div">
              <button
                onClick={() => {
                  navigate(-1);
                  setName("");
                }}
              >
                Retry
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setName("");
                }}
              >
                Exit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="quiz_top_div">
              <h2>
                Question {qNumber + 1} of {quizQuestions.length}
              </h2>
            
            </div>

            <h5>{quizQuestions[qNumber].question}</h5>
            <ol>
              {quizQuestions[qNumber].answers.map((answer) => (
                
                <li
                
                  key={answer.id}
                  onClick={() => selectedAnswer(answer.isCorrect, answer.id)}
                >
               
                   {answer.ans}
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
};
export default Quiz;
