import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import en from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";

import TopBarFrame from "components/Layout/TopBar";
import SideBarFrame from "components/Layout/SideBar";

export default function AdminFrame({ title, children }) {
  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    url: "http://jadedpixel.com",
    accessibilityLabel: "Jaded Pixel",
  };

  const Link = ({ children, url = "", ...rest }) => {
    return (
      <ReactRouterLink to={url} {...rest}>
        {children}
      </ReactRouterLink>
    );
  };

  return (
    <AppProvider i18n={en} linkComponent={Link}>
      <Frame logo={logo} topBar={<TopBarFrame />} navigation={<SideBarFrame />}>
        {children}
      </Frame>
    </AppProvider>
  );
}
