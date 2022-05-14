import React from "react";
import { EmptyState, Loading, Spinner } from "@shopify/polaris";
import AdminFrame from "components/Layout/Frame";

const FullPage = () => {
  return (
    <>
      <AdminFrame>
        <Loading />
        <EmptyState />
        <EmptyState />
        <EmptyState>
          <Spinner size="large"></Spinner>
        </EmptyState>
        <EmptyState />
        <EmptyState />
        <EmptyState />
      </AdminFrame>
    </>
  );
};

export default FullPage;
