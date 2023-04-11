import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap h-100">
            <div className="my-auto d-flex align-items-center">
              <p className="text-white">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="http://www.bookxpert.co.in/" className="text-white">
                  BookXpert
                </a>
              </p>
            </div>
            <div>
              <ul className="social-icons d-flex align-items-center ">
                <li>
                  <a className="facebook " href="#">
                    <i class="bi bi-facebook fa-6x text-primary m-3"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i class="bi bi-instagram fa-6x text-warning m-3"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i class="bi bi-twitter fa-6x text-primary m-3"></i>
                  </a>
                </li>

                <li>
                  <a className="youtube" href="#">
                    <i class="bi bi-youtube fa-6x text-danger m-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
