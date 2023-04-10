import React from 'react';
import { aboutImg, teamImg } from '../../assets/images';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img src={aboutImg} alt='' className='img-fluid' />
          </div>
          <div className='col-12 col-md-6 my-auto'>
            <h2>Who We Are?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-12 col-md-6 my-auto text-lg-end text-justify order-1 order-lg-0'>
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>

          <div className='col-12 col-md-6  order-0 order-lg-1'>
            <img src={teamImg} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
