/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import RewardManagementTopSection from "../Component/RewardManagementtopSection";
import { getFiatPoints } from "../../../query/RewardsManagement/getFiatPointsData/getFiatPoints.query";
import { updateFiatPoints } from "../../../query/RewardsManagement/UpdateFiatPoints/updateFiatPoints.query";
import { ReactToastify } from "../../../shared/utils";

// Card component
const Card = React.memo(({ type, points, materialId, value, onChange }) => {
  return (
    <div className="card">
      <h4>{type}</h4>
      <p className="row" style={{ alignItems: "center" }}>
        <label className="col-lg-4">1 kg</label>
        <label className="col-lg-2">:</label>
        <input
          className="col-lg-4"
          style={{ width: "105px" }}
          value={`${points} Pts.`}
          readOnly
        />
      </p>
      <p className="domination">Points domination</p>
      <input
        type="number"
        min={0}
        step="any" // Allows decimal values (floats)
        placeholder="0"
        value={value === null || value === undefined ? "" : value}
        onChange={(e) => {
          const inputValue = e.target.value;
          // Ensure the value is a float, and handle empty inputs
          onChange(
            materialId,
            inputValue === "" ? null : parseFloat(inputValue)
          );
        }}
      />
    </div>
  );
});

const SettingFiatAndPoints = () => {
  const { data, refetch } = useQuery({
    queryKey: ["failpointsData"],
    queryFn: () => getFiatPoints(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => updateFiatPoints(payload),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const [denominationValues, setDenominationValues] = useState({});

  useEffect(() => {
    if (data?.data?.length) {
      const initialValues = {};
      data.data.forEach((item) => {
        initialValues[item.materialId] = null; // 👈 initially null
      });
      setDenominationValues(initialValues);
    }
  }, [data]);

  const handleInputChange = useCallback((materialId, value) => {
    setDenominationValues((prev) => ({
      ...prev,
      [materialId]: value,
    }));
  }, []);

  const handleSubmit = () => {
    const formattedData = data?.data.map((item) => ({
      id: item.materialId,
      points:
        denominationValues[item.materialId] == null
          ? 0
          : denominationValues[item.materialId],
    }));

    console.log("Formatted Data to Send:", formattedData);
    mutate(formattedData);
  };

  return (
    <div className="common-main-section">
      <RewardManagementTopSection />
      <div
        className="fiat-points-section"
        style={{ marginTop: "20px", marginBottom: "30px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className="primary-title">Fiat and denomination Management</h1>
          <button className="add-btn" onClick={handleSubmit}>
            {isPending ? "updating..." : "Update domination"}
          </button>
        </div>

        <div className="card-container">
          {data?.data.map((item) => (
            <Card
              key={item.materialId}
              type={item.materialName}
              points={item.points}
              materialId={item.materialId}
              value={denominationValues[item.materialId]}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingFiatAndPoints;
