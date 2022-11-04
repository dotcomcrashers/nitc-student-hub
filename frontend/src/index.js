import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Login from './routes/Login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthLayout from './components/AuthLayout';
import NoAuthLayout from './components/NoAuthLayout';
import Navi from './components/Navi';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<NoAuthLayout />}>
          <Route exact path="/" element={<Login />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
