import React,{ useState } from 'react'
import {Carousel} from 'react-bootstrap'

import './home.css'

import Sylocimol from '../../assets/sylocimol_mini.png'
import Toph from '../../assets/toph.jpg'
import Vida from '../../assets/vida.jpg'

function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100"
            src={Vida}
            alt="First slide"
          />
        </Carousel.Item >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 " 
            src={Toph}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Sylocimol}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>


    );
  }
  
 export default Slider;