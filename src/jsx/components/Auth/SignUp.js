import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/css/auth.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className='auth-section'>
      <div className='container'>
        <div className='wrapper col-10 col-md-5 col-lg-4'>
          <div className='title'>
            <span>Sign Up</span>
          </div>
          <form action='#' className='bg-white'>
            <div className='row'>
              <i className='bi bi-person-fill'></i>
              <input type='name' placeholder='Name' required name='name' />
            </div>
            <div className='row'>
              <i className='bi bi-envelope-fill'></i>
              <input type='email' placeholder='Email' required name='email' />
            </div>
            <div className='row'>
              <i
                className={`${
                  showPassword ? 'bi bi-unlock-fill' : 'bi bi-lock-fill'
                } cursor-pointer`}
                onClick={() => setShowPassword(prevState => !prevState)}
              ></i>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                required
                name='password'
              />
            </div>
            <div className='row button'>
              <input type='submit' value='Sign up' />
            </div>
            <div className='signup-link'>
              Already a member? <Link to='/login'>Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
