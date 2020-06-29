import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(true);

  const dispatch = useDispatch();

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function signUpHandler() {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcf8K9jsw8-d3k9d1OMiDdkxYoTL3uyT0",
        { email: email, password: password, returnSecureToken: true}
      )
      .then((response) => {
        console.log(response);
        console.log("SIGNED UP");
      })
      .catch((error) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function toggleHandler() {
      signUp ? setSignUp(false) : setSignUp(true);
  }

  return (
    <div className="login">
      <h2 className="login__title">{signUp ? "Sign Up" : "Sign In"}</h2>
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
      <div onClick={signUp ? signUpHandler : signInHandler} className="login__button">
        Submit
      </div>
      <div onClick={toggleHandler} className="login__button">
          {signUp ? "Sign In" : "Sign Up"}
      </div>
    </div>
  );
}

export default Login;
