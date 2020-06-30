import React from 'react';

import './User.css';

function User(props) {
    return (
        <div className="user">
            <div className="user__profile"><i className="fas fa-user fa-5x"></i></div>
            <div className="user__name-container"><h2 className="user__name">{props.name}</h2></div>
            <div className="user__score-conatiner"><h2 className="user__score">{props.score}</h2></div>
        </div>
    );
}

export default User;