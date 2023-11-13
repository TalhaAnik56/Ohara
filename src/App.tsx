import Carousel from "./components/Carousel";
import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Filters />
      <Carousel></Carousel>

    </>
  );
};

export default App;
