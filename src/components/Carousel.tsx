import image1 from "../assets/carousel/test.jpg"
import image2 from "../assets/carousel/test2.jpeg"
import image3 from "../assets/carousel/test3.jpg"
import Check from "./Check"

const images=[image1,image2,image3]

const Carousel = () => {
  return (
    <>
    <Check images={images}></Check>
    </>
  )
}

export default Carousel