import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Certifications from "./pages/Certification";
import Frontend from "./pages/FrontEnd";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="certification" element={<Certifications />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
