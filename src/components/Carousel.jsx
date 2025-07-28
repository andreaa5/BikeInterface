import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Honda from '/images/gelmis-bartulis-bike.jpg';
import Yamaha from '/images/josh-marshall-bike.jpg';
import Kawasaki from '/images/pairach-boriboonmee-bike.jpg'; 
import KTM from '/images/vaclav-pechar-bike.jpg'; 
import BMW from '/images/zakaria-zayane-bike.jpg'; 
import Aprilia from '/images/pexels-entero-aprilia.jpg'; 

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container-md'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={Honda}
        alt="Honda bike"
      />
        {/*<Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={Yamaha}
        alt="Yamaha bike"
      />
        {/*<Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={Kawasaki}
        alt="Kawasaki bike"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={KTM}
        alt="KTM bike"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={Aprilia}
        alt="Aprilia bike"
      />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default ControlledCarousel;