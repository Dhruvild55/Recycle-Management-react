import { Suspense, useState } from "react";
import useMediaQuery from "../../shared/hooks/useMediaQuery";
import ButtonComponent from "../../shared/components/Buttoncomponent";
import ProductManagement from "./ProductManagement";

const RewardsManagement = () => {
  const [selectedTab, setSelectedTab] = useState("product-management");
  const isMobile = useMediaQuery("(max-width: 425px)");

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "product-management":
        return <ProductManagement />;
      case "rewards-transaction":
        return "";
      case "":
        return "";

      default:
        return null;
    }
  };
  return (
    <div className="common-main-section">
      <div className="common-top-section">
        {isMobile ? (
          <select
            className="dropdown"
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
          >
            <option value="product-management">Product Management</option>
            <option value="rewards-transaction">Rewards Transaction</option>
            <option value="fiat-points-deno">
              Setting for Fiat and Points Deno
            </option>
            <option value="cash-reward">Cash Reward</option>
          </select>
        ) : (
          <>
            <ButtonComponent
              label="Product Management"
              onClick={() => setSelectedTab("product-management")}
              className={`btn${
                selectedTab === "product-management" ? " selected" : ""
              }`}
            />
            <ButtonComponent
              label="Rewards Transaction"
              onClick={() => setSelectedTab("rewards-transaction")}
              className={`btn${
                selectedTab === "rewards-transaction" ? " selected" : ""
              }`}
            />
            <ButtonComponent
              label="Setting for Fiat and Points Deno"
              onClick={() => setSelectedTab("fiat-points-deno")}
              className={`btn${
                selectedTab === "fiat-points-deno" ? " selected" : ""
              }`}
            />
            <ButtonComponent
              label="Cash Reward"
              onClick={() => setSelectedTab("cash-reward")}
              className={`btn${
                selectedTab === "cash-reward" ? " selected" : ""
              }`}
            />
          </>
        )}
      </div>
      <div className="userManagement-content-section">
        <Suspense fallback={<div>Loading...</div>}>
          {renderSelectedComponent()}
        </Suspense>
      </div>
    </div>
  );
};

export default RewardsManagement;
