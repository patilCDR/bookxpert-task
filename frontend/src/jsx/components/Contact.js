import React, { useEffect } from 'react';
import '../../assets/css/contact.css';
import { contactImg } from '../../assets/images/index';

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div class='contact3 py-5'>
        <h1 class='font-weight-bold mt-2 order-0 order-lg-1 text-center'>Contact Us</h1>
        <div class='row no-gutters'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-6'>
                <div class='card-shadow'>
                  <img
                    src={contactImg}
                    alt=''
                    className='img-fluid'
                    // width={800}
                  />
                </div>
              </div>
              <div class='col-lg-4 border border-dark border-1 rounded m-4 p-4'>
                <div class='contact-box '>
                  <h3 class='font-weight-light mt-2 order-0 order-lg-1'>Quick Contact</h3>
                  <form class='mt-4 '>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <label htmlFor='' class='contact-label mt-2 py-2'>
                            Name
                          </label>
                          <input class='form-control' type='text' placeholder='Enter Your Name' />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <label htmlFor='' class=' contact-label mt-2 py-2'>
                            Email-Id
                          </label>
                          <input
                            class='form-control'
                            type='email'
                            placeholder=' Enter Your Email Address'
                          />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <label htmlFor='' class=' contact-label  mt-2 py-2'>
                            Contact Number
                          </label>
                          <input
                            class='form-control'
                            type='text'
                            placeholder='Enter Your Contact Number '
                          />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <label htmlFor='' class='contact-label mt-2 py-2'>
                            Address
                          </label>
                          <textarea
                            class='form-control'
                            rows='3'
                            placeholder='Enter Your Address'
                          ></textarea>
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <label htmlFor='' class='contact-label mt-2 py-2'>
                            Write a Message
                          </label>
                          <textarea class='form-control' rows='3' placeholder='message'></textarea>
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <button
                          type='submit'
                          class='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
