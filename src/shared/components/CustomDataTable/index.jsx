/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataTable = ({ columns, rows, height = 400 }) => {
  return (
    <Paper
      sx={{ height, width: "100%" }}
      elevation={0}
      className="custom-data-table"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            overflowY: "auto", // Enable vertical scrolling
            maxHeight: height - 50, // Adjust based on Paper height
          },
          "& .MuiDataGrid-checkboxInput": {
            color: "#1976D2", // Change checkbox color
          },
          "& .MuiCheckbox-root svg": {
            fill: "#1976D2", // Change checkbox tick color
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: "#FF5733", // Change checkbox color when checked
          },
        }}
      />
    </Paper>
  );
};

export default CustomDataTable;
