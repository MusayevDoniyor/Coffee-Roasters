import React from "react";
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Page = () => {
  return (
    <div className="w-[95%] mt-7 mx-auto">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default Page;
