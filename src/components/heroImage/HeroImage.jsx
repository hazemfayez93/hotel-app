import Banner from "../banner/Banner";
import BannerButton from "../bannerButton/BannerButton";
import "./HeroImage.scss";

const HeroImage = () => {
  return (
    <div className="heroImage">
      <Banner
        title="northleaf lodge"
        description="A hotel booking website demo project."
        image="/"
        button={<BannerButton link="/search">Book Now</BannerButton>}
      />
    </div>
  );
};

export default HeroImage;
