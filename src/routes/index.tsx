import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contacts";
import ContactDetail from "../pages/ContactDetail";
import MainLayout from "../components/MainLayout";

const BrowserRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Contact />} />
          <Route path="/details/:id" element={<ContactDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRoutes;
