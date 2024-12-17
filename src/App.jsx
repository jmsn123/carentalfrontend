import "./App.css";

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
