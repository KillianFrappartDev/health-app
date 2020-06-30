import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import './Score.css';

function Score(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scoreVal, setScoreVal] = useState("");
  const [scoreDisplay, setScoreDisplay] = useState("0");
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.name);
  console.log("name !!! : " + userName);
  console.log(props.scoreNum);
  

  useEffect(() => {
    setScoreDisplay(parseInt(props.scoreNum));
  }, [])

// function clickHandler() {
//   axios
//     .post(`https://health-app-13120.firebaseio.com/DAYS/${user}.json`, {
//       date: new Date().toDateString(),
//       score: "S+",
//       id: Math.random()
//     })
//     .then((response) => {
//       dispatch({type: "ADD", payload: {date: new Date().toDateString(), score: "S+"}});
//     })
//     .catch((error) => console.log(error));
// }

function clickHandler() {
  setIsOpen(true);
};

function closeBackdrop() {
  setIsOpen(false);
};

function scoreHandler(e) {
  setScoreVal(e.target.value);
};

function sumHandler() {
  setIsOpen(false);
  const helperNum = parseInt(scoreVal) + parseInt(scoreDisplay);
  setScoreDisplay(helperNum);
  axios
    .get(`https://health-app-13120.firebaseio.com/USERS/${userName}.json`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((url) => {
      console.log(url);
      const helperUrl = Object.keys(url);
      console.log(helperUrl);

      axios
        .patch(
          `https://health-app-13120.firebaseio.com/USERS/${userName}/${helperUrl[0]}.json`,
          {
            score: helperNum.toString(),
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

    return (
      <React.Fragment>
        {isOpen && <Modal closeAction={closeBackdrop} scoreAction={scoreHandler} sumAction={sumHandler} />}
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