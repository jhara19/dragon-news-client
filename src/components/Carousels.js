import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Room1 from '../assets/Room1.jpg';
import Room2 from '../assets/Room2.jpg';
import Room3 from '../assets/Room3.jpg';
const Carousels = () => {
    return (
        <div className='' >
             <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Room1}
          alt="First slide"
          style={{height:'450px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Room2}
          alt="Second slide"
          style={{height:'450px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Room3}
          alt="Third slide"
          style={{height:'450px'}}
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Carousels;