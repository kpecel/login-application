import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyLayout from "../layout/emptyLayout";
import LoginForm from "../components/login";
import LandingPage from "../components/landing";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="*" element={<LoginForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
