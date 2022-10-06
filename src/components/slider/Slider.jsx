import { useEffect, useState } from "react";
import { sliderData } from "../../data/sliderData";
import Slide from "../slide/Slide";
import "./Slider.scss";

const Slider = () => {
  const [sliderList, setSliderList] = useState(sliderData);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [arrowDisable, setArrowDisable] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const lastSliderNumber = sliderList.length - 1;

  const sliderDecrement = () => {
    setArrowDisable(true);
    setAutoplay(false);
    setSliderNumber((prevSliderNumber) =>
      prevSliderNumber === 0 ? lastSliderNumber : prevSliderNumber - 1
    );
  };

  const sliderIncrement = () => {
    setArrowDisable(true);
    setAutoplay(false);
    setSliderNumber((prevSliderNumber) =>
      prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (autoplay) {
        setSliderNumber((prevSliderNumber) =>
          prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1
        );
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [sliderNumber, lastSliderNumber, autoplay]);

  return (
    <section className="slider">
      {sliderList.map((slide, sliderPosition) => (
        <Slide
          key={slide.id}
          slide={slide}
          sliderPosition={sliderPosition}
          sliderNumber={sliderNumber}
          setArrowDisable={setArrowDisable}
          sliderDecrement={sliderDecrement}
          sliderIncrement={sliderIncrement}
        />
      ))}
    </section>
  );
};

export default Slider;
