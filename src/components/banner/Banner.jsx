import "./Banner.scss";

const Banner = ({ title, description, image, button, arrows }) => {
  return (
    <div className="banner-container">
      <img
        className="banner-image"
        sizes="(max-width: 3840px) 100vw, 3840px"
        srcSet={`
            ${image.image320} 320w,
            ${image.image640} 640w,
            ${image.image960} 960w,
            ${image.image1280} 1280w,
            ${image.image1600} 1600w,
            ${image.image1920} 1920w,
            ${image.image2240} 2240w,
            ${image.image2560} 2560w,
            ${image.image2880} 2880w,
            ${image.image3200} 3200w,
            ${image.image3520} 3520w,
            ${image.image3840} 3840w`}
        src={image.image320}
        alt="placeholder text"
        loading="eager"
      />
      <div className="banner-content">
        <div className="banner-heading">
          <div className="banner-title">
            <span className="banner-title-text">{title}</span>
          </div>
          <div className="banner-description">
            <span className="banner-description-text">{description}</span>
          </div>
        </div>
        {button}
        {arrows}
      </div>
    </div>
  );
};

export default Banner;
