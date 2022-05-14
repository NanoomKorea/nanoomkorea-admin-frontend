import React from "react";
import { Navigation } from "@shopify/polaris";
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";

export default function SideBarFrame() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Home",
            icon: HomeMinor,
          },
          {
            url: "/path/to/place",
            label: "Orders",
            icon: OrdersMinor,
            badge: "15",
          },
          {
            url: "/path/to/place",
            label: "Products",
            icon: ProductsMinor,
          },
        ]}
      />
    </Navigation>
  );
}
