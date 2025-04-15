/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import CollectorTopSection from "../Component/CollectorTopSection";
import { getclearance } from "../../../../query/users/Collector/getClearance/getClearance.query";
import { useParams } from "react-router-dom";
import CustomTable from "../../../../shared/components/CustomTable";
import { headers } from "./config";
import TitleComponent from "../../../../shared/components/TitleComponent";
import Pagination from "../../../../shared/components/CustomPagination";
import { iconRightArrow } from "../../../../assets/images/icons";
import { useSelector } from "react-redux";
import { useState } from "react";

const Clearance = () => {
  const params = useParams();
  const { id } = params;
  const translations = useSelector((state) => state.settings.translations);
  const { showing, entries } = translations;
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { data: cleranceData, isPending } = useQuery({
    queryKey: ["cleranceDetails", pageSize, pageNumber],
    queryFn: () => getclearance(id, pageNumber, pageSize),
  });

  const totalPages = Math.ceil(
    (cleranceData?.data?.totalRecords || 1) / pageSize
  );
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <CollectorTopSection />
        <div style={{ marginBottom: "20px" }}>
          <TitleComponent label="Clearance" />
        </div>
        <CustomTable
          headers={headers}
          data={cleranceData?.data?.items}
          isLoading={isPending}
        />
        <div
          className="table-footer"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <div>
            <span className="back-text" style={{ color: "#181D27" }}>
              {showing} {cleranceData?.data?.items?.length} {entries}{" "}
            </span>
            <img src={iconRightArrow} />
          </div>
          <Pagination
            currentPage={pageNumber}
            totalPages={totalPages}
            onPageChange={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Clearance;
