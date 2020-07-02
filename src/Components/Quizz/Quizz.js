import React, { useState } from "react";

import './Quizz.css';

  function Quizz(props) {
    const [points, setPoints] = useState(0);

    function handleAnswer(x) {
      setPoints(points + x);
      props.nextRound();
    }

    switch (props.round) {
      case 1:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 1</h1>
            <p className="quizz__question">Did you work today ?</p>
            <div className="quizz__buttons">
              <div
                className="quizz__answer"
                onClick={handleAnswer.bind(null, 5)}
              >
                Yes
              </div>
              <div
                className="quizz__answer"
                onClick={handleAnswer.bind(null, 0)}
              >
                No
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 2</h1>
            <p className="quizz__question">
              Did you achieve your goals for the day ?
            </p>
            <div className="quizz__buttons">
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 9)}>
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 3</h1>
            <p className="quizz__question">Did you do sport today ?</p>
            <div className="quizz__buttons">
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, 14)}
            >
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 4</h1>
            <p className="quizz__question">Did you sleep at least 8 hours ?</p>
            <div className="quizz__buttons">
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, 25)}
            >
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 5</h1>
            <p className="quizz__question">Did you snack ?</p>
            <div className="quizz__buttons">
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, -7)}
            >
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 4)}>
              No
            </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 6</h1>
            <p className="quizz__question">Did you eat healthy meals ?</p>
            <div className="quizz__buttons">
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, 11)}
            >
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 7</h1>
            <p className="quizz__question">Did you drink enough water ?</p>
            <div className="quizz__buttons">
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 9)}>
              Yes
            </div>
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, -3)}
            >
              No
            </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 8</h1>
            <p className="quizz__question">Did you smoke/drink alcohol ?</p>
            <div className="quizz__buttons">
            <div
              className="quizz__answer"
              onClick={handleAnswer.bind(null, -15)}
            >
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 9</h1>
            <p className="quizz__question">Did you spend time outside ?</p>
            <div className="quizz__buttons">
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 4)}>
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Question 10</h1>
            <p className="quizz__question">
              Did you answer this quizz yesterday ?
            </p>
            <div className="quizz__buttons">
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 1)}>
              Yes
            </div>
            <div className="quizz__answer" onClick={handleAnswer.bind(null, 0)}>
              No
            </div>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="quizz">
            <h1 className="quizz__title">Thanks you!</h1>
            <h2 className="quizz__question">Your score: <span className="quizz__result">{points}</span></h2>
            <div
              className="quizz__answer"
              onClick={props.sumAction.bind(null, points)}
            >
              Finish
            </div>
          </div>
        );

      default:
        break;
    }
  }

  export default Quizz;