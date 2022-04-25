import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "../pages/Home";

const NotFound = loadable(() => import("../pages/NotFound"));
const Terms = loadable(() => import("../pages/Terms"));
const TermsCookies = loadable(() => import("../pages/TermsCookies"));

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/termos" element={<Terms />} />
      <Route path="/termosCookies" element={<TermsCookies />} />

      {/* NotFound */}
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default routes;
