import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Score from '../../Components/Score/Score';
import Days from '../../Components/Days/Days';


function Profile() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.id);
  const [daysArr, setDaysArr] = useState([]);
  let score;
  let name;

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

      axios.get(`https://health-app-13120.firebaseio.com/USERS.json`)
      .then(response => {
        console.log("HERE")
        console.log(response.data);
        console.log(id);
        for (const key in response.data) {
          for (const code in response.data[key]) {
            if (response.data[key][code].id === id) {
              name = response.data[key][code].name;
              score = response.data[key][code].score;
            }
          }
        }
        console.log(name);
        console.log(score);
        dispatch({type: "NAME", payload: {name: name}});
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <React.Fragment>
      <Score scoreNum={score} />
      <Days list={daysArr} />
    </React.Fragment>
  );
}

export default Profile;