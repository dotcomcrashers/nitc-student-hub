import React from 'react';
import Navi from './Navi';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Navi isAuth={false}/>
      <Outlet />
    </>
  );
}
