import React from 'react';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <footer className='bg-dark py-2'>
        <div class='container'>
          <div class='d-flex align-items-center justify-content-between flex-wrap h-100'>
            <div className='my-auto d-flex align-items-center'>
              <p class='text-white'>
                Copyright &copy; 2023 All Rights Reserved by{' '}
                <a href='http://www.bookxpert.co.in/' className='text-white'>
                  BookXpert
                </a>
                .
              </p>
            </div>
            <div>
              <ul class='social-icons d-flex align-items-center'>
                <li>
                  <a class='facebook' href='#'>
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a class='facebook' href='#'>
                    <BsFacebook />
                  </a>
                </li>
                {/* <li>
                  <a class='twitter' href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a class='dribbble' href='#'>
                    <i class='fa fa-dribbble'></i>
                  </a>
                </li>
                <li>
                  <a class='linkedin' href='#'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
