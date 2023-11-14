import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <header className="header-container">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link " to="/movies">
          Movies
        </NavLink>
      </header>
      <main>{children}</main>
    </Suspense>
  );
};

export default Layout;