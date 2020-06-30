import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Score from '../../Components/Score/Score';
import Days from '../../Components/Days/Days';


function Profile() {
  const id = useSelector(state => state.auth.id);
  const [daysArr, setDaysArr] = useState([]);

  useEffect(() => {
      axios.get(`https://health-app-13120.firebaseio.com/DAYS/${id}.json`)
      .then(response => {
        const newArr = [];
        const newItem = response.data;
        for (const key in newItem) {
          newArr.push(newItem[key]);
        };
        setDaysArr(newArr);
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <React.Fragment>
      <Score />
      <Days list={daysArr} />
    </React.Fragment>
  );
}

export default Profile;