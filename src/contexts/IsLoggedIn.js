import React, { createContext, useState } from "react";

const SignContext = createContext(null);

const SignProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SignContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </SignContext.Provider>
  );
};

export { SignContext, SignProvider };
