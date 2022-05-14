import React from "react";
import "./App.css";
import AdminFrame from "components/Layout/Frame";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AdminFrame>
              <div>aaa</div>
            </AdminFrame>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
