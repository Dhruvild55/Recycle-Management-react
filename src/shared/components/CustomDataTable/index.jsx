/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataTable = ({
  columns,
  rows,
  pageSizeOptions = [5, 10],
  height = 320,
}) => {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height, width: "100%" }} className="custom-data-table">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        hideFooter={true}
      />
    </Paper>
  );
};

export default CustomDataTable;
