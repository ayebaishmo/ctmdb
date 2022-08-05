import './login.css';

function Login() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>Chimpnzee Trust</h1>
          <h2>Login</h2>
          <ul>
            <li>
              <label htmlFor="username">Username</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="text" />
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
