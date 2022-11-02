import logo from './logo.svg';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <p>
          This is the <code>Test Login</code>
        </p>
        <a
          className="Login-link"
          href="/"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
