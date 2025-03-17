import { useSelector } from "react-redux";
import { iconRightArrow } from "../../../../../assets/images/icons";
import Pagination from "../../../../../shared/components/CustomPagination";
import { Loader } from "../../../../../shared/components/Loader";

/* eslint-disable react/prop-types */
const OilWasteCard = ({ date, material, max, min, item, image }) => {
  return (
    <div className="storage-details-card">
      <div className="card-content">
        <div className="date">{formatDate(date)}</div>
        <div className="details">
          <p>
            <span>Material Applied</span>
            <p>{material}</p>
          </p>
          <p>
            <span>Storage(kg)</span>
            <p>
              {min}
              {"/"}
              {max}
            </p>
          </p>
          <p>
            <span>Item</span>
            <p>{item}</p>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img
          src={image === null || "/images/oilwaste.png"}
          alt="Used Cooking Oil Containers"
        />
      </div>
    </div>
  );
};
const formatDate = (dateString) => {
  if (!dateString || dateString === "0001-01-01T00:00:00") {
    return "Not Available";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const StorageAddressDetails = ({
  storageData = [],
  isPending,
  pageNumber,
  totalPages,
  setPageNumber,
}) => {
  const translations = useSelector((state) => state.settings.translations);
  console.log(storageData);
  if (isPending) {
    return (
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <Loader animation="border" width="50px" height="50px" />
      </div>
    );
  }
  return (
    <>
      <div className="storage-details-card-list">
        {storageData?.map((card, index) => {
          console.log(card);
          return (
            <OilWasteCard
              key={index}
              date={card.applyDate}
              material={card.matrial}
              max={card.max}
              min={card.current}
              item={card.item}
              image={card.image}
            />
          );
        })}
      </div>
      <div className="table-footer" style={{ marginTop: "30px" }}>
        <div>
          <span className="back-text" style={{ color: "#181D27" }}>
            {translations.showing} {storageData.length} {translations.entries}{" "}
          </span>
          <img src={iconRightArrow} />
        </div>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={setPageNumber}
        />
      </div>
    </>
  );
};

export default StorageAddressDetails;
