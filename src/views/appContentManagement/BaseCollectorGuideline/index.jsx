import { useNavigate } from "react-router-dom";
import TitleComponent from "../../../shared/components/TitleComponent";
import AppContentManagementTopSection from "../Components/AppContentManagementTopSection";
import ButtonComponent from "../../../shared/components/Buttoncomponent";
import { FaPlus } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { baseGuideline } from "../../../query/AppContentManagement/BaseCollectorGuideline/baseCollectorGuideline.query";
import ConditionComponent from "../MaterialAndServices/addNewWaste/TermsAndCondition/ConditionComponent";
import { route } from "../../../shared/constants/AllRoutes";

const BaseCollectorGuideline = () => {
  // ! Base guideline API
  const { data, isPending, refetch } = useQuery({
    queryKey: ["baseGuideline"],
    queryFn: () => baseGuideline(),
  });

  console.log("Base Guideline", data?.data);
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <AppContentManagementTopSection />
        <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
          <TitleComponent label="Collector Guideline" />
          <ButtonComponent
            label="Add Guideline"
            className="add-btn"
            onClick={() =>
              navigate(route.appContentManagement.BaseCollectorGuideline.Add)
            }
            icon={<FaPlus style={{ fontSize: "15px" }} />}
          />
        </div>
        <ConditionComponent
          title={data?.data[0].title}
          description={data?.data[0].description}
          id={data?.data[0].id}
          isLoading={isPending}
          isDelete={true}
          refetch={refetch}
        />
      </div>
      {data?.data.slice(1).map((item, index) => (
        <div
          className="common-main-section"
          style={{ marginTop: "20px", minHeight: "0px", paddingBottom: "40px" }}
          key={index}
        >
          <ConditionComponent
            title={item.title}
            description={item.description}
            id={item.id}
            isLoading={isPending}
            isDelete={true}
            refetch={refetch}
          />
        </div>
      ))}
    </>
  );
};

export default BaseCollectorGuideline;
