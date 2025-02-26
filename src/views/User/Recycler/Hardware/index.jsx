import CustomTable from "../../../../shared/components/CustomTable";

const HardwareTable = () => {
  const rows = [
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
  ];
  const headerData = [
    { key: "item", label: "item" },
    { key: "category", label: "category" },
    { key: "quantity", label: "quantity" },
    { key: "paymentType", label: "paymentType" },
    { key: "status", label: "status" },
    {
      key: "action",
      label: "action",
      render: () => <button className="view-button">View</button>,
    },
  ];
  return (
    <div className="hardware-table" style={{ marginTop: "20px" }}>
      <CustomTable headers={headerData} data={rows} />
    </div>
  );
};

export default HardwareTable;
