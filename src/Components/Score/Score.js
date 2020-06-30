import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import './Score.css';

function Score() {
const dispatch = useDispatch();
const user = useSelector(state => state.auth.id)

function clickHandler() {
  axios
    .post(`https://health-app-13120.firebaseio.com/DAYS/${user}.json`, {
      date: new Date().toDateString(),
      score: "S+",
      id: Math.random()
    })
    .then((response) => {
      dispatch({type: "ADD", payload: {date: new Date().toDateString(), score: "S+"}});
    })
    .catch((error) => console.log(error));
}

    return (
      <div className="score">
        <h1 className="score__percent">50%</h1>
        <div
          className="score__button"
          onClick={clickHandler}
          // onClick={() =>
          //   dispatch({
          //     type: "ADD",
          //     payload: { id: Math.random(), score: Math.round(Math.random() *100), date: "30/03" },
          //   })
          // }
        >
          <h2>NEW DAY</h2>
        </div>
      </div>
    );
}

export default Score;