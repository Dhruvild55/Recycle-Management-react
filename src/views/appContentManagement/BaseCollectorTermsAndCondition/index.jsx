import { FaPlus } from "react-icons/fa6";
import ButtonComponent from "../../../shared/components/Buttoncomponent";
import TitleComponent from "../../../shared/components/TitleComponent";
import AppContentManagementTopSection from "../Components/AppContentManagementTopSection";
import ConditionComponent from "../MaterialAndServices/addNewWaste/TermsAndCondition/ConditionComponent";
import { useQuery } from "@tanstack/react-query";
import { getCollectorBaseTermsAndCondition } from "../../../query/AppContentManagement/getBaseCollectorTerms/getBaseCollectorTerms.query";

const BaseCollectorTerms = () => {
  // ! Base Terms And Condition API
  const { data, isPending, refetch } = useQuery({
    queryKey: ["baseTermsAndCondition"],
    queryFn: () => getCollectorBaseTermsAndCondition(),
  });

  return (
    <>
      <div className="common-main-section">
        <AppContentManagementTopSection />
        <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
          <TitleComponent label="Terms And Condition" />
          <ButtonComponent
            label="Add T&C"
            className="add-btn"
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

export default BaseCollectorTerms;
