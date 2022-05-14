import React, { useCallback, useContext, useState } from "react";
import { TopBar } from "@shopify/polaris";
import { LogOutMinor, CustomersMinor } from "@shopify/polaris-icons";
import Logout from "utils/Logout";
import { UserInfoContext } from "contexts/UserInfo";

export default function TopBarFrame(props) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { userInfo } = useContext(UserInfoContext);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const userMenuMarkup = Object.keys(userInfo).length ? (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: "내 정보",
              icon: CustomersMinor,
              url: "/profile",
            },
          ],
        },
        {
          items: [
            {
              content: "로그아웃",
              icon: LogOutMinor,
              onAction: () => Logout(),
            },
          ],
        },
      ]}
      name={userInfo.name ? userInfo.name : "프로필을 수정해주세요"}
      detail={userInfo.email}
      avatar={userInfo.photoURL}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  ) : null;

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={props.toggleMobileNavigationActive}
    />
  );
}
