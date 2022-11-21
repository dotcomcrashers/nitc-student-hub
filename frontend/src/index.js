import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import './index.css';
import LostFoundHome from './routes/lost-found/LostFoundHome';
import LostFoundCreate from './routes/lost-found/LostFoundCreate';
import LostFoundView from './routes/lost-found/LostFoundView';
import LostFoundPersonal from './routes/lost-found/LostFoundPersonal';
import LostFoundNotifications from './routes/lost-found/LostFoundNotifications';
import Login from './routes/Login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthLayout from './components/AuthLayout';
import NoAuthLayout from './components/NoAuthLayout';

import {
  BrowserRouter,
  Routes,
  Route,
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
            <Route exact path="/lost-found/home" element={<LostFoundHome />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route exact path="/lost-found/create" element={<LostFoundCreate />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/lost-found/view" element={<LostFoundView />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/lost-found/personal" element={<LostFoundPersonal />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/lost-found/notifications" element={<LostFoundNotifications />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/lost-found"element={<Navigate to="/lost-found/home"/>}/>
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
