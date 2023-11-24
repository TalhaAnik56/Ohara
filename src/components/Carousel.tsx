import { Box, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { CgPlayTrackNextO } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css" // Make sure to define your custom styles here

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    dotsClass: "dot_button",
    appendDots: (dots: React.ReactNode) => (
      <Box
        position="absolute"
        bottom={{ base: "0px", lg: "0px" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
      >
        <ul>{dots}</ul>
      </Box>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: (
      <Icon
        boxSize={{ base: "20px", lg: "30px" }}
        _hover={{ color: "white" }}
        color={"gray.300"}
        as={CgPlayTrackPrevO}
      ></Icon>
    ),
    nextArrow: (
      <Icon
        boxSize={{ base: "20px", lg: "30px" }}
        _hover={{ color: "white" }}
        color={"gray.300"}
        as={CgPlayTrackNextO}
      ></Icon>
    ),
  };

  return (
    <Box
      paddingX={{ base: "20px", lg: "120px" }}
      marginTop={{base:"30px",lg:"40px"}}
    >
      <Slider {...settings} className="custom-slider">
        {images.map((image, index) => (
          <Box key={index} position={"relative"}>
            <Image
              height={{ base: "250px", md: "500px" }}
              width={"100%"}
              objectFit={"cover"}
              src={image}
              borderRadius={"10px"}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
