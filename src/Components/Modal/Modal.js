import React from 'react';

import './Modal.css';

function Modal(props) {
    return (
      <React.Fragment>
        <div onClick={props.closeAction} className="backdrop"></div>
        <div className="modal">
          <input onChange={props.scoreAction} className="modal__input" type="text" />
          <div onClick={props.sumAction} className="modal__submit">
            OK
          </div>
        </div>
      </React.Fragment>
    );
}

export default Modal;