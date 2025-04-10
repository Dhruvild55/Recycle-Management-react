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
import { useEffect } from "react";

const MaterialAndeServicesList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "App Content Management | Recycler Management";
  }, []);
  const { data, isPending } = useQuery({
    queryKey: ["materialAndService"],
    queryFn: () => getMaterialAndServices(),
  });

  const { mutate: deleteMaterialId } = useMutation({
    mutationFn: deleteMaterial,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["materialAndService"]);
    },
    onError: (error) => {
      console.error("Delete failed:", error);
    },
  });

  const handleDelete = (id) => {
    deleteMaterialId(id);
  };

  const materialData = data?.data;
  console.log(data?.data);
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
            navigate(
              route.appContentManagement.MaterialAndServices.Add.MaterialType
            )
          }
        >
          Add Material <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <CustomDataTable
        rows={transformedData || []}
        columns={columns(handleDelete)}
        pagination={false}
        pageSize={10}
        showCheckbox={true}
      />
    </div>
  );
};

export default MaterialAndeServicesList;
