import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            {/* <a className="navbar-brand mx-4 px-4" href="#">
            
            </a> */}
            <img
              className="navbar-brand mx-4  "
              src="http://www.bookxpert.co.in/assets/img/logo.png"
              alt=""
              style={{ width: "10rem" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul
              className="navbar-nav ml-auto mb-2 mb-lg-0  mx-4"
              style={{ color: "#000", fontWeight: "600", fontSize: "1.3rem" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item px-2 mx-2">
                  <a className="nav-link " href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <li className="nav-item px-2 mx-2">
                  <a
                    className="nav-link "
                    href="#"
                    style={
                      {
                        // color: " #05a0e8",
                        // color: "#05529aeb",
                      }
                    }
                  >
                    Blog
                  </a>
                </li>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <li className="nav-item px-2 mx-2">
                  <a className="nav-link " href="#">
                    Services
                  </a>
                </li>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <li className="nav-item px-2 mx-2 ">
                  <a className="nav-link " href="#">
                    Contact-Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="http://www.bookxpert.co.in/#appointment" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-text">Essentials for Construction</span>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0  mx-4">
              <li className="nav-item px-4 mx-4">
                <a
                  className="nav-link "
                  href="#"
                 
                >
                  Contact-Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-telephone-inbound"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item contact">
                <a
                  className="nav-link px-0"
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  000-0000-000
                  <br />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* <nav
        class="navbar navbar-expand-lg fixed-top navbar-light bg-light"
        aria-label="Main navigation"
      >
        <div class="container-fluid">
          <img
            class="navbar-brand"
            src="http://www.bookxpert.co.in/assets/img/logo.png"
            href="#"
            width={100}
          />

          <button
            class="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0  mx-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
