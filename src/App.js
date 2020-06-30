import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';


import Home from './Pages/Home/Home';
import UserPage from './Pages/UserPage/UserPage';
import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {isAuth && (
            <Route path="/users" exact>
              <UserPage />
            </Route>
          )}
          {isAuth && (
            <Route path="/profile" exact>
              <Profile />
            </Route>
          )}
          {!isAuth && <Route path="/auth" exact>
            <Auth />
          </Route>}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
