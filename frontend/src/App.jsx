import './App.css';
import LostFoundHome from './routes/lost-found/LostFoundHome';
import LostFoundCreate from './routes/lost-found/LostFoundCreate';
import LostFoundView from './routes/lost-found/LostFoundView';
import LostFoundPersonal from './routes/lost-found/LostFoundPersonal';
import LostFoundNotifications from './routes/lost-found/LostFoundNotifications';
import Login from './routes/Login';
import AuthLayout from './components/AuthLayout';
import NoAuthLayout from './components/NoAuthLayout';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
