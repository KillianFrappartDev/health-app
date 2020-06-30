import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Users from '../../Components/Users/Users';
import './UserPage.css';

function UserPage() {
const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get("https://health-app-13120.firebaseio.com/USERS.json")
    .then(response => {
        const newArr = [];
        for (const key in response.data) {
            for (const code in response.data[key]) {
                newArr.push(response.data[key][code]);
            }
        };
        return newArr;
    })
    .then(arr => {
        setUsers(arr);
    })
    .catch(error => console.log(error));
}, []);

    return <Users userList={users} />;
}

export default UserPage;