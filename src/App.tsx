import Banners from "./components/Banners";
import BookGrid from "./components/BookGrid";
import Demo from "./components/Demo";
import Navbar from "./components/Navbar";
import TradingBanner from "./components/TradingBanner";

const App = () => {
  return (
    <>
      <Navbar />
      <Banners />
      <Demo />
      <BookGrid />
      <TradingBanner/>
    </>
  );
};

export default App;
