/* eslint-disable react/prop-types */
const OilWasteCard = ({ date, material, storage, item, image }) => {
  return (
    <div className="storage-details-card">
      <div className="card-content">
        <div className="date">{date}</div>
        <div className="details">
          <p>
            <span>Material Applied</span>
            <p>{material}</p>
          </p>
          <p>
            <span>Storage(kg)</span>
            <p>{storage}</p>
          </p>
          <p>
            <span>Item</span>
            <p>{item}</p>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="Used Cooking Oil Containers" />
      </div>
    </div>
  );
};

const StorageAddressDetails = () => {
  const data = [
    {
      date: "28 December 2024",
      material: "Oil Waste",
      storage: "45/50",
      item: "Used Cooking Oil",
      image: "/images/oilwaste.png",
    },
    {
      date: "28 December 2024",
      material: "Oil Waste",
      storage: "45/50",
      item: "Used Cooking Oil",
      image: "/images/oilwaste.png",
    },
    {
      date: "28 December 2024",
      material: "Oil Waste",
      storage: "45/50",
      item: "Used Cooking Oil",
      image: "/images/oilwaste.png",
    },
    {
      date: "28 December 2024",
      material: "Oil Waste",
      storage: "45/50",
      item: "Used Cooking Oil",
      image: "/images/oilwaste.png",
    },
  ];

  return (
    <div className="storage-details-card-list">
      {data.map((card, index) => (
        <OilWasteCard
          key={index}
          date={card.date}
          material={card.material}
          storage={card.storage}
          item={card.item}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default StorageAddressDetails;
