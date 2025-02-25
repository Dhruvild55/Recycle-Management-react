/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataTable = ({
  columns,
  rows,
  pageSizeOptions = [5, 10],
  height = 400,
}) => {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-container--top [role=row]": {
            backgroundColor: "#C9FFDF",
          },
        }}
      />
    </Paper>
  );
};

export default CustomDataTable;
