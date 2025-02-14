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
    { key: "item", label: "Item" },
    { key: "category", label: "Category" },
    { key: "quantity", label: "Quantity" },
    { key: "paymentType", label: "Payment Type" },
    { key: "status", label: "Status" },
    {
      key: "action",
      label: "Action",
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
