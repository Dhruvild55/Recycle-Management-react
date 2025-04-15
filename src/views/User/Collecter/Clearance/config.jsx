export const headers = [
  {
    key: "orderId",
    label: "order_id",
  },
  {
    key: "depotName",
    label: "depotName",
  },
  {
    key: "timestamp",
    label: "dateAndTime",
    render: (row) => new Date(row.timestamp).toLocaleString(),
  },
  {
    key: "materialType",
    label: "materialType",
    render: (row) => {
      return (
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {row.materialType.map((type, i) => (
            <li style={{ listStyle: "none" }} key={i}>
              {type}
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    key: "quantity",
    label: "quantity",
    render: (row) => {
      return (
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {row.quantity.map((type, i) => (
            <li style={{ listStyle: "none" }} key={i}>
              {type}
            </li>
          ))}
        </ul>
      );
    },
  },
];
