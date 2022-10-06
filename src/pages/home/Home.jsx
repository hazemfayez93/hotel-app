import About from "../../components/about/About";
import HeroImage from "../../components/heroImage/HeroImage";
import Slider from "../../components/slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <HeroImage />
      <About />
      <Slider />
    </main>
  );
};

export default Home;
