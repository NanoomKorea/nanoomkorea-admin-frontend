import React from "react";
import AdminFrame from "components/Layout/Frame";
import LogOut from "utils/LogOut";

const DashboardPage = () => {
  return (
    <AdminFrame title="대시보드">
      <div>DashboardPage</div>
      <button onClick={LogOut}>로그아웃</button>
    </AdminFrame>
  );
};

export default DashboardPage;
