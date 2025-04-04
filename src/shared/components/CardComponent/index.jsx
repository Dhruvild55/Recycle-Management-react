/* eslint-disable react/prop-types */
import { memo } from "react";

const CardComponent = ({
  totalB2B,
  totalB2C,
  totalCollection,
  totalUsers,
  isLoading,
}) => {
  return (
    <div className="card-section">
      <div className="card-box">
        <h6 className="card-title">Total Number of User</h6>
        <h3 className="card-value">{isLoading ? 0 : totalUsers?.count ?? 0}</h3>
        <div className="card-inner-div">
          <div className="textValue-box">
            <p>
              {(isLoading
                ? "--%"
                : totalUsers?.percentageChange % 1 === 0
                ? totalUsers?.percentageChange + "%"
                : totalUsers?.percentageChange.toFixed(2) + "%") ?? "--%"}
            </p>
          </div>
          <p>Compared last year</p>
        </div>
      </div>
      <div className="card-box">
        <h6 className="card-title">Total B2C</h6>
        <h3 className="card-value">{isLoading ? 0 : totalB2C?.count ?? 0}</h3>
        <div className="card-inner-div">
          <div className="textValue-box">
            <p>
              {(isLoading
                ? "--%"
                : totalB2C?.percentageChange % 1 === 0
                ? totalB2C?.percentageChange + "%"
                : totalB2C?.percentageChange.toFixed(2) + "%") ?? "--%"}
            </p>
          </div>
          <p>Compared last year</p>
        </div>
      </div>
      <div className="card-box">
        <h6 className="card-title">Total B2B</h6>
        <h3 className="card-value">{isLoading ? 0 : totalB2B?.count ?? 0}</h3>
        <div className="card-inner-div">
          <div className="textValue-box">
            <p>
              {(isLoading
                ? "--%"
                : totalB2B?.percentageChange % 1 === 0
                ? totalB2B?.percentageChange + "%"
                : totalB2B?.percentageChange.toFixed(2) + "%") ?? "--%"}
            </p>
          </div>
          <p>Compared last year</p>
        </div>
      </div>
      <div className="card-box">
        <h6 className="card-title">Total Collection</h6>
        <h3 className="card-value">
          {isLoading
            ? 0
            : totalCollection?.weight % 1 === 0
            ? totalCollection?.weight
            : totalCollection?.weight.toFixed(2) + " kg"}
        </h3>
        <div className="card-inner-div">
          <div className="textValue-box">
            <p>
              {(isLoading ? "--%" : `${totalCollection?.percentageChange}%`) ??
                "--%"}
            </p>
          </div>
          <p>Compared last year</p>
        </div>
      </div>
    </div>
  );
};

export default memo(CardComponent);
