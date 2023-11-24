
import image1 from "../assets/carousel/car1.webp";
import image2 from "../assets/carousel/car2.webp";
import image3 from "../assets/carousel/car3.webp";
import image4 from "../assets/carousel/car4.webp";
import image5 from "../assets/carousel/car5.webp";
import Carousel from "./Carousel";

const images = [image5, image4, image3,image1,image2];

const Banners = () => {
  return (
    <>
      <Carousel images={images}/>
    </>
  );
};

export default Banners;
