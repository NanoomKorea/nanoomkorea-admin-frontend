import React, { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { SignContext } from "contexts/IsLoggedIn";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "apis/Firebase";
import DashboardPage from "pages/Dashboard";
import WorkListPage from "pages/WorkList";
import WorkWritePage from "pages/WorkWrite";
import PeopleListPage from "pages/PeopleList";
import LoginPage from "pages/Login";

const auth = getAuth(firebaseApp);

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(SignContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("uid", `${user.uid}`);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  const loginState = localStorage.getItem("uid");

  return (
    <BrowserRouter>
      {loginState ? (
        isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Navigate replace to="/" />} />
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/works" element={<WorkListPage />}></Route>
            <Route path="/works/write" element={<WorkWritePage />}></Route>
            <Route path="/people" element={<PeopleListPage />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<div>로딩중...</div>}></Route>
          </Routes>
        )
      ) : (
        <Routes>
          <Route path="/*" element={<Navigate replace to="login" />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
