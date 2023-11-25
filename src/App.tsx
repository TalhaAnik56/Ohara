import Banners from "./components/Banners";
import BookGrid from "./components/BookGrid";
import CheckThisOut from "./components/CheckThisOut";
import Demo from "./components/Demo";
import FreshlyBaked from "./components/FreshlyBaked";
import Navbar from "./components/Navbar";
import SellerBanner from "./components/SellerBanner";
import TradingBanner from "./components/TradingBanner";

const App = () => {
  return (
    <>
      <Navbar />
      <Banners />
      <Demo />
      <BookGrid />
      <TradingBanner/>
      <FreshlyBaked/>
      <SellerBanner/>
      <CheckThisOut/>
    </>
  );
};

export default App;
