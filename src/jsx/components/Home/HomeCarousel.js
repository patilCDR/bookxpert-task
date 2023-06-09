import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="main-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=1060&t=st=1681153252~exp=1681153852~hmac=b68ac60c4d7eea9dc01b1703189eacc34fea4ecfa9bf2baafdcb1390bfecd80b"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/business-people-meeting-using-telephone-laptop_13339-218494.jpg?size=626&ext=jpg&ga=GA1.2.1540744635.1681153160&semt=sph"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
