import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img
          src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
          alt="Slide 1"
          style={{ width: '100%', height: '300px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img
          src="https://i.dummyjson.com/data/products/88/thumbnail.jpg"
          alt="Slide 2"
          style={{ width: '100%', height: '300px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img
          src="https://i.dummyjson.com/data/products/18/thumbnail.jpg"
          alt="Slide 3"
          style={{ width: '100%', height: '300px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img
          src="https://i.dummyjson.com/data/products/11/thumbnail.jpg"
          alt="Slide 3"
          style={{ width: '100%', height: '300px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <img
          src="https://i.dummyjson.com/data/products/64/thumbnail.jpg"
          alt="Slide 3"
          style={{ width: '100%', height: '300px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>
    </Slider>
  );
};

export default Carousel;
