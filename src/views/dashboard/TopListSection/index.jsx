/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import FilterDropdown from "../../../shared/components/FillerDropdown";
import TableComponent from "../TableComponent";

const filterOptions = [
  { value: "by day", label: "by day" },
  { value: "by week", label: "by week" },
  { value: "by month", label: "by month" },
];

const TopListSection = React.memo(
  ({ title, filterSetter, data, headers, isPending }) => (
    <div
      className="common-main-section"
      style={{ minHeight: "0px", width: "100%", padding: "15px 0 10px" }}
    >
      <div
        className="common-page-toolbar"
        style={{ margin: "0 10px 10px", alignItems: "baseline" }}
      >
        <div className="left-section">
          <label className="primary-title">{title}</label>
        </div>
        <FilterDropdown
          label="Filter"
          options={filterOptions}
          onFilterChange={filterSetter}
        />
      </div>
      <TableComponent headers={headers} data={data} isPending={isPending} />
    </div>
  )
);

export default TopListSection;
