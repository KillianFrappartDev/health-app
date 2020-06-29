import React from 'react';

import './Day.css';

function Day(props) {
    return (
        <div className="day">
            <h3 className="day__date">{props.date}</h3>
            <h2 className="day__score">{props.score}</h2>
        </div>
    );
}

export default Day;