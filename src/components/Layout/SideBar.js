import React from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@shopify/polaris";
import {
  HomeMajor,
  ListMajor,
  FolderPlusMajor,
  CustomersMajor,
} from "@shopify/polaris-icons";

export default function SideBarFrame() {
  const location = useLocation();

  return (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "대시보드",
            icon: HomeMajor,
            exactMatch: true,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="봉사 관리"
        items={[
          {
            url: "/works",
            label: "봉사 목록",
            icon: ListMajor,
            exactMatch: true,
          },
          {
            url: "/works/write",
            label: "봉사 추가",
            icon: FolderPlusMajor,
            exactMatch: true,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="대원 관리"
        items={[
          {
            url: "/people",
            label: "대원 목록",
            icon: CustomersMajor,
          },
        ]}
      />
    </Navigation>
  );
}
