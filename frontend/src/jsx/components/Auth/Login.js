import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../../assets/css/auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <section className='auth-section'>
      <div className='auth-container'>
        <div className='wrapper col-10 col-md-5 col-lg-4'>
          <div className='title'>
            <span>Login</span>
          </div>
          <form action='#' className='bg-white' onSubmit={handleSubmit}>
            <div className='row'>
              <i className='bi bi-envelope-fill'></i>
              <input type='email' placeholder='Email' required />
            </div>
            <div className='row'>
              <i
                className={`${
                  showPassword ? 'bi bi-unlock-fill' : 'bi bi-lock-fill'
                } cursor-pointer`}
                onClick={() => setShowPassword(prevState => !prevState)}
              ></i>
              <input type={showPassword ? 'text' : 'password'} placeholder='Password' required />
            </div>
            <div className='pass'>
              <a href='#'>Forgot password?</a>
            </div>
            <div className='row button'>
              <input type='submit' value='Login' />
            </div>
            <div className='signup-link'>
              Not a member? <Link to='/signup'>Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
