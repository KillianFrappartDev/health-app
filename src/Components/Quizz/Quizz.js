import React, { useState } from "react";

import './Quizz.css';

  function Quizz(props) {
    const [points, setPoints] = useState(0);

    function handleAnswer(bool) {
        if (bool) {
            setPoints(points + 10);
        }
        props.nextRound();
    }

    switch (props.round) {
      case 1:
        return (
          <div className="Quizz">
            <h1 className="Quizz__title">Question 1</h1>
            <p className="Quizz__question">Did you work well today ?</p>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, true)}>Yes</div>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, false)}>No</div>
          </div>
        );
  
      case 2:
        return (
          <div className="Quizz">
            <h1 className="Quizz__title">Question 2</h1>
            <p className="Quizz__question">Did you eat healthy today ?</p>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, true)}>Yes</div>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, false)}>No</div>
          </div>
        );
  
      case 3:
        return (
          <div className="Quizz">
            <h1 className="Quizz__title">Question 3</h1>
            <p className="Quizz__question">Did you do sport today ?</p>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, true)}>Yes</div>
            <div className="Quizz__answer" onClick={handleAnswer.bind(null, false)}>No</div>
          </div>
        );

        case 4:
        return (
          <div className="Quizz">
            <h1 className="Quizz__title">Thanks you!</h1>
        <h2 className="Quizz__result">Your score: {points}</h2>
            <button className="Quizz__next" onClick={props.sumAction.bind(null, points)}>Finish</button>
          </div>
        );
  
      default:
        break;
    }
  }

  export default Quizz;