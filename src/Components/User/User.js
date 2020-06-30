import React from 'react';

import './User.css';

function User(props) {
    return (
        <div className="user">
            <h2 className="user__name">{props.name}</h2>
            <h2 className="user__score">{props.score}</h2>
        </div>
    );
}

export default User;