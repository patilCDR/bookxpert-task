import React from 'react';
import '../../../assets/css/auth.css';

const Login = () => {
  return (
    <section class='auth-section'>
      <div class='container'>
        <div class='wrapper col-10 col-md-5 col-lg-4'>
          <div class='title'>
            <span>Login</span>
          </div>
          <form action='#' className='bg-white'>
            <div class='row'>
              <i class='bi bi-envelope-fill'></i>
              <input type='text' placeholder='Email or Phone' required />
            </div>
            <div class='row'>
              <i class='fas fa-lock'></i>
              <input type='password' placeholder='Password' required />
            </div>
            <div class='pass'>
              <a href='#'>Forgot password?</a>
            </div>
            <div class='row button'>
              <input type='submit' value='Login' />
            </div>
            <div class='signup-link'>
              Not a member? <a href='#'>Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
