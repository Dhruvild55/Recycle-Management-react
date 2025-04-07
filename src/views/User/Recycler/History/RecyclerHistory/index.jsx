/* eslint-disable react/prop-types */
import PickUpCard from "./PickupCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "../../../../../shared/hooks/useMediaQuery";

const RecyclerHistory = ({ upcommingPickUps }) => {
  const isMobile = useMediaQuery("(max-width: 425px)");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const noDataStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "12px",
    fontSize: "16px",
    color: "#666",
    fontWeight: 500,
    minHeight: "120px",
    textAlign: "center",
    marginTop: "10px",
  };

  return (
    <>
      {isMobile ? (
        <div className="slider-container" style={{ margin: "10px 0" }}>
          {upcommingPickUps?.length > 0 ? (
            <Slider {...settings}>
              {upcommingPickUps.map((data, index) => (
                <PickUpCard key={index} data={data} />
              ))}
            </Slider>
          ) : (
            <div style={noDataStyle}>No Data Available</div>
          )}
        </div>
      ) : (
        <>
          {upcommingPickUps?.length === 0 && (
            <div style={noDataStyle}>No Data Available</div>
          )}
          <div className="card-wrapper">
            {upcommingPickUps?.map((data, index) => (
              <PickUpCard key={index} data={data} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RecyclerHistory;
