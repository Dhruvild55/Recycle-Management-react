/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import AppContentManagementTopSection from "../../Components/AppContentManagementTopSection";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";
import CustomDataTable from "../../../../shared/components/CustomDataTable";
import { columns } from "./config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMaterialAndServices } from "../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServices/getMaterialAndServices.query";
import { deleteMaterial } from "../../../../query/AppContentManagement/MaterialAndServices/deleteMaterial/deleteMaterial.query";

const MaterialAndeServicesList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["materialAndService"],
    queryFn: getMaterialAndServices,
  });

  const { mutate: deleteMaterialId } = useMutation({
    mutationFn: deleteMaterial,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["materialAndService"]);
      console.log("material Delete succesfully");
    },
    onError: (error) => {
      console.error("Delete failed:", error);
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    deleteMaterialId(id);
  };

  const materialData = data?.data;
  const transformedData = materialData?.map((item) => ({
    ...item,
    id: item.materialTypeId, // Ensure every row has a unique `id`
  }));

  return (
    <div className="common-main-section">
      <AppContentManagementTopSection />
      <div className="common-page-toolbar">
        <label className="primary-title">Material & Service Management</label>
        <button
          className="add-btn"
          onClick={() =>
            navigate(route.appContentManagement.MaterialAndServices.Add)
          }
        >
          Add Material <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <CustomDataTable
        rows={transformedData || []}
        columns={columns(handleDelete)}
      />
    </div>
  );
};

export default MaterialAndeServicesList;
