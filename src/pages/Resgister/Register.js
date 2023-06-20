import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Mythumb from '~/assets/images/thumb.png';
import Mylogo from '~/assets/images/logo.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import axios from 'axios';
import { useEffect, useState } from 'react';
// import config from '~/config';

const cx = classNames.bind(styles);

function Register() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthdateError, setBirthdateError] = useState('');

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

  const handleRegisterUser = (user) => {
    axios
      .post(`http://localhost:3000/users`, user)
      .then(() => {
        fetchUser();
      })
      .catch((err) => console.log(err));
  };

  const validateForm = () => {
    let isValid = true;

    // Check if email is empty or already exists
    if (!email) {
      setEmailError('Please enter an email');
      isValid = false;
    } else if (user.some((u) => u.email === email)) {
      setEmailError('Email already exists. Please choose a different email');
      isValid = false;
    }

    // Check if username is empty or already exists
    if (!username) {
      setUsernameError('Please enter a username');
      isValid = false;
    } else if (user.some((u) => u.username === username)) {
      setUsernameError('Username already exists. Please choose a different username');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      isValid = false;
    }

    if (!firstName) {
      setFirstNameError('Please enter your first name');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Please enter your last name');
      isValid = false;
    }

    if (!birthdate) {
      setBirthdateError('Please enter your birthdate');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the user's registration data
    if (validateForm()) {
      const userData = {
        email,
        username,
        password,
        firstName,
        lastName,
        birthdate,
        gender,
        role: 'user',
      };

      handleRegisterUser(userData);
      // window.location.href = config.routes.home; // Replace with the appropriate URL or route
      console.log(userData);

      // Reset the form fields after successful submission
      setEmail('');
      setUsername('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setBirthdate('');
      setGender('');
    }
  };

  // const isSubmitDisabled = !email || !username || !password || !firstName || !lastName || !birthdate || !gender;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('first-Color')}></div>
      <div className={cx('container')}>
        <div className={cx('box-container')}>
          <div className={cx('left-side')}>
            <form className={cx('form')} onSubmit={handleSubmit}>
              <h1 className={cx('form-title')}>Sign up</h1>
              <div className={cx('input-container')}>
                <input
                  placeholder="Enter email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                ></input>
                {emailError && <p className={cx('error-message')}>{emailError}</p>}
              </div>
              <div className={cx('input-container')}>
                <input
                  placeholder="Enter username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError('');
                  }}
                ></input>
                {usernameError && <p className={cx('error-message')}>{usernameError}</p>}
              </div>
              <div className={cx('input-container')}>
                <input
                  placeholder="Enter password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                ></input>
                {passwordError && <p className={cx('error-message')}>{passwordError}</p>}
              </div>
              <div className={cx('split-content')}>
                <div className={cx('w-content')}>
                  <input
                    placeholder="First name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setFirstNameError('');
                    }}
                  ></input>
                  {firstNameError && <p className={cx('error-message')}>{firstNameError}</p>}
                </div>
                <div className={cx('w-content')}>
                  <input
                    placeholder="Last name"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setLastNameError('');
                    }}
                  ></input>
                  {lastNameError && <p className={cx('error-message')}>{lastNameError}</p>}
                </div>
              </div>
              <div className={cx('input-container')}>
                <input
                  placeholder="Date of Birth"
                  type="date"
                  required
                  value={birthdate}
                  onChange={(e) => {
                    setBirthdate(e.target.value);
                    setBirthdateError('');
                  }}
                ></input>
                {birthdateError && <p className={cx('error-message')}>{birthdateError}</p>}
              </div>
              <div className={cx('split1-content')}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={cx('radio-group')}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>
              <button className={cx('submit')} type="submit" onClick={handleSubmit}>
                Sign up
              </button>
              <a href="/login">Sign In ?</a>
            </form>
          </div>
          <div className={cx('right-side')}>
            <div className={cx('wrapper-img')}>
              <a href="/login">
                <img src={Mythumb} atl="mythumb" className={cx('thumb-img')} />
                <img src={Mylogo} atl="mylogo" className={cx('logo-img')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
