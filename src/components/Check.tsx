import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  images: string[];
}

const Check: React.FC<CarouselProps> = ({ images }) => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider ref={slider} {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>

      <Button onClick={() => slider.current?.slickPrev()}>Previous</Button>
      <Button onClick={() => slider.current?.slickNext()}>Next</Button>
    </Box>
  );
};

export default Check;
