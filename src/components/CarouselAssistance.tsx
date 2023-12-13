import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../../src/images/a.jpg';
import img3 from '../../src/images/c.jpg';
import img4 from '../../src/images/d.jpg';
import img5 from '../../src/images/e.jpg';
import img6 from '../../src/images/f.jpg';

const CarouselAssistance:FunctionComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {/* Ajoutez vos images ici */}
        <div>
          <img className="w-full h-screen" src={img2} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img3} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img4} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img5} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img6} alt="Domaine d'activité 2" />
        </div>

        {/* Ajoutez autant d'images que nécessaire */}
      </Slider>
    </div>
  );
};

export default CarouselAssistance;
