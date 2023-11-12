import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header-container">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link " to="/movies">
          Movies
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;