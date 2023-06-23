import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Mythumb from '~/assets/images/thumb.png';
import Mylogo from '~/assets/images/logo.png';
import { Link } from 'react-router-dom';
import config from '~/config';

import { useState, useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Login() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching user: ', err);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!username) {
      setUsernameError('Please enter a username');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const foundUser = user.find((u) => u.username === username);
      console.log('foundUser:', foundUser);

      if (foundUser) {
        if (foundUser.password && foundUser.password === password) {
          if (foundUser.role === 'admin') {
            // User is an admin, redirect to the admin page
            window.location.href = config.routes.customermanagement;
            console.log('username:', username);
            console.log('password:', password);
            console.log('role:', foundUser.role);
          } else if (foundUser.role === 'user') {
            // User is a regular user, redirect to the home page
            window.location.href = config.routes.home;
            console.log('username:', username);
            console.log('password:', password);
            console.log('role:', foundUser.role);
          }
        } else {
          // Invalid password
          console.log('Invalid password');
        }
      } else {
        // User not found
        console.log('Invalid username or email');
      }
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('first-Color')}></div>
      <div className={cx('container')}>
        <div className={cx('box-container')}>
          <div className={cx('left-side')}>
            <form className={cx('form')} onSubmit={handleSubmit}>
              <h1 className={cx('form-title')}>Sign in to your account</h1>
              <div className={cx('input-container')}>
                <input
                  placeholder="Enter Username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                {usernameError && <p className={cx('error-message')}>{usernameError}</p>}
              </div>
              <div className={cx('input-container')}>
                <input
                  placeholder="Enter password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordError && <p className={cx('error-message')}>{passwordError}</p>}
              </div>
              <button className={cx('submit')} type="submit" onClick={handleSubmit}>
                Sign in
              </button>

              <p className={cx('signup-link')}>
                No account?
                <Link to={config.routes.register}> Sign up</Link>
              </p>
              <p className={cx('forget-password')}>Forget your password?</p>
            </form>
          </div>
          <div className={cx('right-side')}>
            <div className={cx('wrapper-img')}>
              <img src={Mythumb} atl="mythumb" className={cx('thumb-img')} />
              <Link to={config.routes.home}>
                <img src={Mylogo} atl="mylogo" className={cx('logo-img')} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
