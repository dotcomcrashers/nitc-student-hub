import logo from './logo.svg';
import './Home.css';

function App() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          This is <code>Home</code>
        </p>
        <a
          className="Home-link"
          href="/"
          rel="noopener noreferrer"
        >
          Goto Login Page
        </a>
      </header>
    </div>
  );
}

export default App;
