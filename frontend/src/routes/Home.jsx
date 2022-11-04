import logo from './logo.png';
import './Home.css';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  
  if (!cookies.email) {
    return (
      <Navigate to="/"/>
    );
  }
  
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={cookies ? cookies.pic: logo} className="Home-logo" alt="logo" />
        <p>
          This is <code>Home</code>
        </p>
        <a
          className="Home-link"
          rel="noopener noreferrer"
        >
          {cookies.name}
        </a>
      </header>
    </div>
  );
}

export default Home;
