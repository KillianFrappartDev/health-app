import React from 'react';

import User from '../User/User';
import './Users.css';

function Users(props) {
    return (
      <div>
        {props.userList.map((user) => {
            console.log("USERS:" + user);
          return <User name={user.name} score={user.score} key={user.id} />;
        })}
      </div>
    );
}

export default Users;