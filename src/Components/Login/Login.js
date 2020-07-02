import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signUp, setSignUp] = useState(true);

  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.id);

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function nameHandler(e) {
    setName(e.target.value);
  }

  function initUser(id) {
    axios
    .get(`https://health-app-13120.firebaseio.com/USERS.json`)
    .then((response) => {
      console.log(response.data);
      let name;
      for (const key in response.data) {
        for (const code in response.data[key]) {
          if (response.data[key][code].id === id) {
            console.log("WORKED");
            name = response.data[key][code].name;
            dispatch({
              type: "DATA",
              payload: {
                name: response.data[key][code].name,
                score: response.data[key][code].score,
              },
            });
          }
        }
      }
      console.log(name);
      
      return name;
    })
    .then((name) => {
      axios
      .get(`https://health-app-13120.firebaseio.com/DAYS/${name}.json`)
      .then((response) => {
        const newArr = [];
        console.log("!!!!");
        console.log(response.data);
        const newItem = response.data;
        for (const key in newItem) {
            newArr.push(newItem[key]);
        }
        return newArr;
      })
      .then((resArr) => {
        dispatch({ type: "SET", payload: { daysArray: resArr } });
      })
      .then((res) => {
      })
      .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
  }

  function signUpHandler() {
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      alert("Fields can not be empty and password must be at least 6 digits");
      return;
    }
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcf8K9jsw8-d3k9d1OMiDdkxYoTL3uyT0",
        { email: email, password: password, returnSecureToken: true}
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: "LOGIN",
          payload: { id: response.data.localId, token: response.data.idToken },
        });
        console.log("SIGNED UP");
        initUser(response.data.localId);
        axios
          .post(`https://health-app-13120.firebaseio.com/USERS/${name}.json`, { name: name, id: response.data.localId, score: "0" })
          .then((res) => {
            dispatch({type: "DATA", payload: {name: name, score: 0}});
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        alert("Error, password must be at least 6 digits long");
        console.log(error);
      });
  }

  function signInHandler() {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcf8K9jsw8-d3k9d1OMiDdkxYoTL3uyT0",
        { email: email, password: password, returnSecureToken: true }
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: "LOGIN",
          payload: { id: response.data.localId, token: response.data.idToken },
        });
        console.log("SIGNED IN");
        initUser(response.data.localId);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }

  function toggleHandler() {
      signUp ? setSignUp(false) : setSignUp(true);
  }

  return (
    <div className="login">
      <h2 className="login__title">{signUp ? "Sign Up" : "Sign In"}</h2>
      {signUp && <label htmlFor="name">Name :</label>}
      {signUp && (
        <input
          onChange={nameHandler}
          type="text"
          placeholder="Enter your name..."
          id="name"
        />
      )}
      <label htmlFor="email">Email :</label>
      <input
        onChange={emailHandler}
        value={email}
        type="text"
        placeholder="Enter your email..."
        id="email"
      />
      <label htmlFor="email">Password :</label>
      <input
        onChange={passwordHandler}
        value={password}
        type="password"
        placeholder="Enter your password..."
        id="password"
      />
      <div className="login__buttons">
        <div
          onClick={signUp ? signUpHandler : signInHandler}
          className="login__button"
        >
          Submit
        </div>
        <h2>OR</h2>
        <div onClick={toggleHandler} className="login__button login__button-toggle">
          {signUp ? "Sign In" : "Sign Up"}
        </div>
      </div>
    </div>
  );
}

export default Login;
