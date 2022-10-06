import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Gym from "./pages/gym/Gym";
import Ballroom from "./pages/ballroom/Ballroom";
import Pool from "./pages/pool/Pool";
import Search from "./pages/search/Search";
import Restaurant from "./pages/restaurant/Restaurant";
import { useLayoutEffect } from "react";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gym" element={<Gym />} />
        <Route path="ballroom" element={<Ballroom />} />
        <Route path="pool" element={<Pool />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="search" element={<Search />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
