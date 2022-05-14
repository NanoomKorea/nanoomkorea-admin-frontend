import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import DashboardPage from "pages/Dashboard";
import WorkListPage from "pages/WorkList";
import WorkWritePage from "pages/WorkWrite";
import PeopleListPage from "pages/PeopleList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/works" element={<WorkListPage />}></Route>
        <Route path="/works/write" element={<WorkWritePage />}></Route>
        <Route path="/people" element={<PeopleListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
