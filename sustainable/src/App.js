import React from "react";
import "./App.css";
import Home from "./Home.js";
import ClientHome from "./client-home.js";
import AdminHome from "./admin-home.js";
import SupplierHome from "./supplier-home.js";
import ClientOrder from "./client-find-order.js";
import SupplierOrder from "./supplier-find-order.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AutoComplete = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/client" element={<ClientHome />} />
        <Route path="/supplier" element={<SupplierHome />} />
        <Route path="corder" element={<ClientOrder />} />
        <Route path="sorder" element={<SupplierOrder />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AutoComplete;