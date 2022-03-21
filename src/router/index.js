import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../page/home";
import { MakeResume } from "../page/makeResume";
import { ResumeTemp } from "../page/resumeTemp";

export const ResumeRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/makeresume" exact element={<MakeResume />}></Route>
        <Route path="/resumetemp" exact element={<ResumeTemp />}></Route>
      </Routes>
    </Router>
  );
};
