import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navbar.css';

function Navbar() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
      <div className="navbar">
        <h1 className="navbar__brand">Health <span className="navbar__brand-icon"><i className="fas fa-carrot fa-md"></i></span></h1>
        <div className="navbar__items">
          <Link to="/">Home</Link>
          {isAuth && <Link to="/profile">Profile</Link>}
          {isAuth && <Link to="/users">Users</Link>}
          {!isAuth && <Link to="/auth">Login</Link>}
        </div>
      </div>
    );
}

export default Navbar;