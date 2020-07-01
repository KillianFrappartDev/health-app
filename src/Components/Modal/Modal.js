import React, { useState } from 'react';

import Quizz from '../Quizz/Quizz';
import './Modal.css';



function Modal(props) {
  const [round, setRound] = useState(1);

  function nextRound() {
    let helper = round;
    helper++;
    setRound(helper);
  }

    return (
      <React.Fragment>
        <div onClick={props.closeAction} className="backdrop"></div>
        <div className="modal">
          <Quizz round={round} nextRound={nextRound} sumAction={props.sumAction} />
        </div>
      </React.Fragment>
    );
}

export default Modal;