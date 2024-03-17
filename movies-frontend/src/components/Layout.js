import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Layout;
