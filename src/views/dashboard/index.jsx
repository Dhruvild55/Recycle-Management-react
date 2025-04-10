import { useCallback, useEffect, useState } from "react";
import CardComponent from "../../shared/components/CardComponent";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../query/Dashboard/getDashboardData/getDashboardData.query";
import ChartSection from "./ChartSection";
import TopListSection from "./TopListSection";
import { headres } from "./config";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [filterText, setFilter] = useState();
  const [filterRecycler, setFilterRecycler] = useState();

  useEffect(() => {
    document.title = "Dashboard | Recycle Management ";
  }, []);

  const { data, isPending } = useQuery({
    queryKey: ["dashboard", filterText, filterRecycler],
    queryFn: () => getDashboardData({ filterText, filterRecycler }),
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });

  useEffect(() => {
    setDashboardData((prev) => (prev !== data ? data : prev));
  }, [data]);

  const totalB2B = dashboardData?.data?.totalB2B;
  const totalB2C = dashboardData?.data?.totalB2C;
  const totalCollection = dashboardData?.data?.totalCollection;
  const totalUsers = dashboardData?.data?.totalUsers;
  const topCollectors = dashboardData?.data?.topCollectors;
  const topRecyclers = dashboardData?.data?.topRecycler;

  const handleFilterChange = useCallback((val) => setFilter(val), []);
  const handleRecyclerFilterChange = useCallback(
    (val) => setFilterRecycler(val),
    []
  );

  return (
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
        <ChartSection />
      </div>
      <div className="table-section">
        <TopListSection
          title="Top Collectors"
          filterSetter={handleFilterChange}
          data={topCollectors}
          headers={headres}
          isPending={isPending}
        />
        <TopListSection
          title="Top Recyclers"
          filterSetter={handleRecyclerFilterChange}
          data={topRecyclers}
          headers={headres}
          isPending={isPending}
        />
      </div>
    </div>
  );
};

export default Dashboard;
