import Banner from "../banner/Banner";

import { ReactComponent as LeftIcon } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/chevron-right-solid.svg";
import "./Slide.scss";
import BannerButton from "../bannerButton/BannerButton";

const Slide = ({
  slide,
  sliderPosition,
  sliderNumber,
  setArrowDisable,
  sliderDecrement,
  sliderIncrement,
}) => {
  const enableArrows = () => {
    setArrowDisable(false);
  };

  return (
    <div
      className={`slide ${
        sliderPosition === sliderNumber ? "activeSlider" : "inactiveSlider"
      }`}
      onTransitionEnd={enableArrows}
    >
      <Banner
        title={slide.title}
        description={slide.description}
        image={slide.image}
        button={
          <BannerButton link={slide.buttonLink}>
            {slide.buttonText}
          </BannerButton>
        }
        arrows={
          <div className="banner-arrows">
            <button className="banner-left-arrow" onClick={sliderDecrement}>
              <LeftIcon className="banner-left-icon" />
            </button>
            <button className="banner-right-arrow" onClick={sliderIncrement}>
              <RightIcon className="banner-right-icon" />
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Slide;
