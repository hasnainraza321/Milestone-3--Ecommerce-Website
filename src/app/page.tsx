import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Progressor from "./Components/Progressor";
import ProductList from "./Components/ProductList";
import Banner from "./Components/Banner";
import Offer from "./Components/Offer";
import Card from "./Components/Card";
import Menu from "./Components/Menuitem";
import Reservation from "./Components/Reservation";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen">
      <Navbar />
      <Carousel/>
      <Progressor/>
      <Banner/>
      <ProductList/>
      <Menu />
      <Offer/>
      <Card/>
      <Reservation />
      <Footer/>
    </div>
  );
}
