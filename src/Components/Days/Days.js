import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Day from '../Day/Day';
import './Days.css';

function Days(props) {
    return (
      <div className="days">
          {props.list.map(day => <Day key={day.id} score={day.score} date={day.date} />)}
      </div>
    );
}

export default Days;