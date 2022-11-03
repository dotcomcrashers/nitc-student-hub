import logo from './logo.svg';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <p>
          This is <code>Login</code>
        </p>
        <a
          className="Login-link"
          href="/home"
          rel="noopener noreferrer"
        >
          Goto Home Page
        </a>
      </header>
    </div>
  );
}

export default Login;
