/* eslint-disable react/prop-types */
import { memo, useMemo } from "react";

const CardComponent = () => {
  const cardData = useMemo(
    () => [
      {
        title: "Total Number Of Users",
        value: "12309",
        text: "compared to Last Year",
        textValue: "12.10%",
      },
      {
        title: "Total Number Of Users",
        value: "12309",
        text: "compared to Last Year",
        textValue: "12.10%",
      },
      {
        title: "Total Number Of Users",
        value: "12309",
        text: "compared to Last Year",
        textValue: "12.10%",
      },
      {
        title: "Total Number Of Users",
        value: "12309",
        text: "compared to Last Year",
        textValue: "12.10%",
      },
    ],
    []
  );

  return (
    <div className="card-section">
      {cardData.map((item, index) => (
        <div key={index} className="card-box">
          <h6 className="card-title">{item.title}</h6>
          <h3 className="card-value">{item.value}</h3>
          <div className="card-inner-div">
            <div className="textValue-box">
              <h6>{item.textValue}</h6>
            </div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(CardComponent);
