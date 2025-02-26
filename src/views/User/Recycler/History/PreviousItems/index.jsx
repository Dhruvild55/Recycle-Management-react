import CustomTable from "../../../../../shared/components/CustomTable";

const PreviousItems = () => {
  const rows = [
    {
      id: "DEL-1133002",
      material: "Used Cooking Oil",
      volume: 200,
      pickup: "14 December 2024",
      points: 178,
    },
    {
      id: "DEL-1133002",
      material: "Used Cooking Oil",
      volume: 200,
      pickup: "14 December 2024",
      points: 178,
    },
    {
      id: "DEL-1133002",
      material: "Used Cooking Oil",
      volume: 200,
      pickup: "14 December 2024",
      points: 178,
    },
    {
      id: "DEL-1133002",
      material: "Used Cooking Oil",
      volume: 200,
      pickup: "14 December 2024",
      points: 178,
    },
    {
      id: "DEL-1133002",
      material: "Used Cooking Oil",
      volume: 200,
      pickup: "14 December 2024",
      points: 178,
    },
  ];

  const headerData = [
    { key: "id", label: "id" },
    { key: "material", label: "material" },
    { key: "volume", label: "volume" },
    { key: "pickup", label: "pickup" },
    { key: "points", label: "points" },
    {
      key: "action",
      label: "action",
      render: () => <button className="view-button">View</button>,
    },
  ];

  return (
    <div className="common-main-section" style={{ marginTop: "10px" }}>
      <label className="primary-title" style={{ marginBottom: "20px" }}>
        Previous Items
      </label>
      <CustomTable headers={headerData} data={rows} />
    </div>
  );
};

export default PreviousItems;
