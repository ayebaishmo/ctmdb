import './login.css';

function Login() {
  return (
    <div className="LoginP">
      <div className='logindivs'>
        <div className='loginData one'>
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
        <div className='loginData two'>
          <h1>Chimpnzee Trust</h1>
          <h2>Login</h2>
          <ul>
            <li>
              <input type="text" placeholder='username' />
            </li>
            <li>
              <input type="text" placeholder='Password' />
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
