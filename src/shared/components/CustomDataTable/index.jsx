/* eslint-disable react/prop-types */
import { Button, Paper, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const CustomPagination = ({
  paginationModel,
  setPaginationModel,
  totalPages,
}) => {
  const handlePrev = () => {
    if (paginationModel.page > 0) {
      setPaginationModel((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const handleNext = () => {
    if (paginationModel.page < totalPages - 1) {
      setPaginationModel((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handlePageClick = (page) => {
    setPaginationModel((prev) => ({ ...prev, page }));
  };

  // Generate page numbers dynamically (showing 3 pages at a time)
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }
    return pages.slice(
      Math.max(0, paginationModel.page - 1),
      Math.min(totalPages, paginationModel.page + 2)
    );
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ p: 2 }}
    >
      <Button
        variant="contained"
        size="small"
        onClick={handlePrev}
        disabled={paginationModel.page === 0}
      >
        Previous
      </Button>

      {getPageNumbers().map((page) => (
        <Button
          key={page}
          variant={paginationModel.page === page ? "contained" : "outlined"}
          size="small"
          onClick={() => handlePageClick(page)}
        >
          {page + 1}
        </Button>
      ))}

      <Button
        variant="contained"
        size="small"
        onClick={handleNext}
        disabled={paginationModel.page >= totalPages - 1}
      >
        Next
      </Button>
    </Stack>
  );
};

const CustomDataTable = ({
  columns,
  rows,
  height = 400,
  showCheckbox = false,
  pagination = false,
  pageSize = 10,
}) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize,
    page: 0,
  });

  const totalPages = Math.ceil(rows.length / paginationModel.pageSize);

  return (
    <Paper
      sx={{ height, width: "100%" }}
      elevation={0}
      className="custom-data-table"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={showCheckbox}
        pagination={pagination}
        pageSizeOptions={[5, 10, 20, 50]}
        paginationModel={pagination ? paginationModel : undefined}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        slotProps={{
          pagination: {
            component: () =>
              pagination && (
                <CustomPagination
                  paginationModel={paginationModel}
                  setPaginationModel={setPaginationModel}
                  totalPages={totalPages}
                />
              ),
          },
        }}
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            overflowY: "auto",
            maxHeight: height - 50,
          },
          "& .MuiDataGrid-footerContainer": {
            display: pagination ? "" : "none",
          },
        }}
      />
    </Paper>
  );
};

export default CustomDataTable;
