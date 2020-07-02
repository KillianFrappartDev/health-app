import React from 'react';
import { useSelector } from 'react-redux';

import Score from '../../Components/Score/Score';
import Days from '../../Components/Days/Days';


function Profile() {
  const daysArr = useSelector(state => state.days);
  const userScore = useSelector(state => state.auth.score);

  return (
    <React.Fragment>
      <Score scoreNum={userScore} />
      <Days list={daysArr} />
    </React.Fragment>
  );
}

export default Profile;