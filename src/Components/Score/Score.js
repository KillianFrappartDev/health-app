import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import './Score.css';

function Score(props) {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useSelector((state) => state.auth.name);
  const currentScore = useSelector(state => state.auth.score);
  const dispatch = useDispatch();

function clickHandler() {
  setIsOpen(true);
};

function closeBackdrop() {
  setIsOpen(false);
};

function sumHandler(result) {
  setIsOpen(false);
  const helperNum = parseInt(result) + parseInt(currentScore);
  const fakeId = Math.random();
  const curDate = new Date().toDateString();
  let helperUrl;
  console.log("AAAAAAAA" + userName);
  

  axios
    .post(`https://health-app-13120.firebaseio.com/DAYS/${userName}.json`, {
      date: curDate,
      score: result,
      id: fakeId,
    })
    .then((response) => {
      dispatch({
        type: "ADD",
        payload: { date: curDate, score: result, id: fakeId },
      });
    })
    .then(() => {
      axios
        .get(`https://health-app-13120.firebaseio.com/USERS/${userName}.json`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then((url) => {
          console.log(url);
          helperUrl = Object.keys(url);
          console.log(helperUrl);
        })
        .then(() => {
          axios
            .patch(
              `https://health-app-13120.firebaseio.com/USERS/${userName}/${helperUrl[0]}.json`,
              {
                score: helperNum.toString(),
              }
            )
            .then((response) =>
              dispatch({ type: "SCORE", payload: { score: helperNum } })
            )
            .then((response) => {})
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

    return (
      <React.Fragment>
        {isOpen && <Modal closeAction={closeBackdrop} sumAction={sumHandler} />}
        <div className="score">
          <h1 className="score__percent">{props.scoreNum}</h1>
          <div className="score__button" onClick={clickHandler}>
            <h2>New Day</h2>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Score;