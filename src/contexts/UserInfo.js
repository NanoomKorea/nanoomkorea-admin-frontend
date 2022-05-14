import React, { createContext, useState } from "react";

const UserInfoContext = createContext(null);

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserInfoProvider };
