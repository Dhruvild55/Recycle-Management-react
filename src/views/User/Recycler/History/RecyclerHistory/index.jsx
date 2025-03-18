/* eslint-disable react/prop-types */
import PickUpCard from "./PickupCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "../../../../../shared/hooks/useMediaQuery";
const RecyclerHistory = ({ upcommingPickUps = [] }) => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isMobile ? (
        <div className="slider-container">
          <Slider {...settings}>
            {upcommingPickUps.map((data, index) => (
              <PickUpCard key={index} data={data} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="card-wrapper">
          {upcommingPickUps.map((data, index) => (
            <PickUpCard key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecyclerHistory;
