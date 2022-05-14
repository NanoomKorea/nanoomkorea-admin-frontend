import React, { useCallback, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import en from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";

import TopBarFrame from "components/Layout/TopBar";
import SideBarFrame from "components/Layout/SideBar";

export default function AdminFrame({ title, children }) {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const logo = {
    width: 124,
    topBarSource:
      "http://www.nanoomkorea.or.kr/upload/siteInformations/150518313237_d135f39f03.jpg",
    url: "/",
    accessibilityLabel: "나눔코리아 로고",
  };

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const Link = ({ children, url = "", ...rest }) => {
    return (
      <ReactRouterLink to={url} {...rest}>
        {children}
      </ReactRouterLink>
    );
  };

  return (
    <AppProvider i18n={en} linkComponent={Link}>
      <HelmetProvider>
        <Helmet>
          <title>{`${title} - 나눔코리아 어드민`}</title>
        </Helmet>
      </HelmetProvider>

      <Frame
        logo={logo}
        topBar={
          <TopBarFrame
            toggleMobileNavigationActive={toggleMobileNavigationActive}
          />
        }
        navigation={<SideBarFrame />}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
      >
        {children}
      </Frame>
    </AppProvider>
  );
}
