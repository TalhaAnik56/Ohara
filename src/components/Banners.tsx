
import image1 from "../assets/carousel/ace2.png";
import image2 from "../assets/carousel/itachi.jpg";
import image3 from "../assets/carousel/obito.png";
import image4 from "../assets/carousel/OnePiece2.jpeg";
import image5 from "../assets/carousel/sheba.jpg";
import Carousel from "./Carousel";

const images = [image1, image2, image3,image4,image5];

const Banners = () => {
  return (
    <>
      <Carousel images={images}/>
    </>
  );
};

export default Banners;
