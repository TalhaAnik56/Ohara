import Banners from "./components/Banners";
import BookGrid from "./components/BookGrid";
import Demo from "./components/Demo";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Banners/>
      <BookGrid/>
      <Demo/>
    </>
  );
};

export default App;
