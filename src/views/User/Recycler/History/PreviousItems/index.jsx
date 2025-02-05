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
    { key: "id", label: "Id" },
    { key: "material", label: "Material" },
    { key: "volume", label: "Volume(kg)" },
    { key: "pickup", label: "Pickup" },
    { key: "points", label: "Est.Points" },
    {
      key: "action",
      label: "Action",
      render: () => <button className="view-button">View</button>,
    },
  ];

  return (
    <div className="table-container">
      <h1>Previous Items</h1>
      <CustomTable headers={headerData} data={rows} />
    </div>
  );
};

export default PreviousItems;
