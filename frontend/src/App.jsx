import './App.css';
import LostFoundHome from './routes/lost-found/LostFoundHome';
import LostFoundCreate from './routes/lost-found/LostFoundCreate';
import LostFoundView from './routes/lost-found/LostFoundView';
import LostFoundPersonal from './routes/lost-found/LostFoundPersonal';
import LostFoundNotifications from './routes/lost-found/LostFoundNotifications';
import Login from './routes/Login';
import Navi from './components/Navi';

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
            <Route element={<Navi isAuth={false}/>}>
              <Route exact path="/" element={<Login />} />
            </Route>
            <Route element={<Navi isAuth={true}/>}>
              <Route exact path="/lost-found/home" element={<LostFoundHome />} />
              <Route exact path="/lost-found/create" element={<LostFoundCreate />} />
              <Route path="/lost-found/view" element={<LostFoundView />} />
              <Route path="/lost-found/personal" element={<LostFoundPersonal />} />
              <Route path="/lost-found/notifications" element={<LostFoundNotifications />} />
              <Route path="/lost-found"element={<Navigate to="/lost-found/home"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
