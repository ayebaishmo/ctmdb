import './login.css';
import med from './img/med.JPG';

function Login() {
  return (
    <div className="LoginP">
      <div className='logindivs'>
        <div className=''>
          <img className='medImg' src={med} alt="" />
        </div>
        <div className='loginData two'>
          <h1>Chimpnzee Trust</h1>
          <h2>Medical records</h2>
          <h2>Login</h2>
          <ul>
            <li>
              <input type="text" placeholder='username' />
            </li>
            <li>
              <input type="text" placeholder='Password' />
            </li>
            <li>
              <button className='logB'>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
