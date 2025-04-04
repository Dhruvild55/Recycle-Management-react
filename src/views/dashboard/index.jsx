/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardComponent from "../../shared/components/CardComponent";
import MixedChart from "../../shared/components/MixedChart";
import BarChartComponent from "../../shared/components/BarChartComponent";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../query/Dashboard/getDashboardData/getDashboardData.query";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Loader } from "../../shared/components/Loader";
import ProfilePic from "../../shared/components/ProfilePic";
import FilterDropdown from "../../shared/components/FillerDropdown";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [filterText, setFilter] = useState();
  const [filterRecycler, setFilterRecycler] = useState();
  const translations = useSelector((state) => state.settings.translations);
  useEffect(() => {
    document.title = "Dashboard | Recycle Management ";
  }, []);
  const { data, isPending } = useQuery({
    queryKey: ["dashboard", filterText, filterRecycler],
    queryFn: () => getDashboardData({ filterText, filterRecycler }),
  });

  useEffect(() => {
    if (data) {
      setDashboardData(data);
    }
  }, [data]);

  const totalB2B = dashboardData?.data?.totalB2B;
  const totalB2C = dashboardData?.data?.totalB2C;
  const totalCollection = dashboardData?.data?.totalCollection;
  const totalUsers = dashboardData?.data?.totalUsers;
  const topCollectors = dashboardData?.data?.topCollectors;
  const topRecyclers = dashboardData?.data?.topRecycler;

  const headres = [
    {
      key: "name",
      label: "name",
      render: (row) => {
        return (
          <div
            className="d-flex mx-2"
            style={{ alignItems: "center ", gap: "20px" }}
          >
            <ProfilePic image={row.imagePath} name={row.name} />
            <span>{row.name}</span>
          </div>
        );
      },
    },
    {
      key: "collectionWeight",
      label: "collection",
      render: (row) => {
        return (
          <span
            className="d-flex gap-3 align-items-center"
            style={{ fontSize: "14px", fontWeight: "400", color: "#414651" }}
          >
            Collection: {"  "}
            <p
              className=""
              style={{
                marginBottom: "0px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {" "}
              {row?.collectionWeight % 1 === 0
                ? row?.collectionWeight
                : row?.collectionWeight.toFixed(2)}
              {"kg"}
            </p>
          </span>
        );
      },
    },
  ];

  const TableComponent = ({ headers, data }) => {
    return (
      <Table responsive>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key} style={{ padding: "16px 20px" }}>
                {translations.tableFields[header.label]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <tr>
              <td colSpan="7">
                <div className="loader-container">
                  <Loader animation="border" width="15px" height="15px" />
                </div>
              </td>
            </tr>
          ) : data?.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={header.key}
                    style={header.width ? { width: `${header.width}px` } : {}}
                  >
                    {header.render ? header.render(row) : row[header.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-user">
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "0px",
                    fontWeight: "600",
                  }}
                >
                  No user Found
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <div className="dashboard-section">
        <div className="common-main-section">
          <div className="cards-container">
            <CardComponent
              totalB2B={totalB2B}
              totalB2C={totalB2C}
              totalCollection={totalCollection}
              totalUsers={totalUsers}
              isLoading={isPending}
            />
          </div>
          <div className="chart-contant">
            <MixedChart />
            <div className="bar-chart">
              <BarChartComponent isDashboard={true} />
            </div>
          </div>
        </div>
        <div
          className="table-section"
          style={{ marginTop: "20px", display: "flex", gap: "20px" }}
        >
          <div
            className="common-main-section"
            style={{
              minHeight: "0px",
              width: "50%",
              padding: "15px 0px 10px 0px",
            }}
          >
            <div
              className="common-page-toolbar"
              style={{ margin: "0px 10px 10px 10px", alignItems: "baseline" }}
            >
              <div className="left-section">
                <label className="primary-title">Top Collectors</label>
              </div>
              <FilterDropdown
                label="Filter"
                options={[
                  { value: "by day", label: "by day" },
                  { value: "by week", label: "by week" },
                  { value: "by month", label: "by month" },
                ]}
                onFilterChange={setFilter}
              />
            </div>
            <TableComponent headers={headres} data={topCollectors} />
          </div>
          <div
            className="common-main-section"
            style={{
              minHeight: "0px",
              width: "50%",
              padding: "15px 0px 10px 0px",
            }}
          >
            <div
              className="common-page-toolbar"
              style={{ margin: "0px 10px 10px 10px", alignItems: "baseline" }}
            >
              <div className="left-section">
                <label className="primary-title">Top Recycler</label>
              </div>
              <FilterDropdown
                label="Filter"
                options={[
                  { value: "by day", label: "by day" },
                  { value: "by week", label: "by week" },
                  { value: "by month", label: "by month" },
                ]}
                onFilterChange={setFilterRecycler}
              />
            </div>
            <TableComponent headers={headres} data={topRecyclers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
