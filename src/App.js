import React, { Component, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBarHeader from "./components/NavBar.jsx";
import BlogList from "./components/BlogList";
import Dashboad from "./components/Dashboad";

const App = () => {
  return (
    <>
      <NavBarHeader />

      <Routes>
        <Route path="" element={<BlogList />} />
        <Route path="home" element={<BlogList />} />
        <Route path="dashboad" element={<Dashboad />} />
      </Routes>
    </>
  );
};

export default App;
