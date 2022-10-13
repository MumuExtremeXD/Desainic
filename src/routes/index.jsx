import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "../pages/Home";

const Community = loadable(() => import("../pages/Community"));

const AllServices = loadable(() => import("../pages/Services/AllServices"));
const UniService = loadable(() => import("../pages/Services/Service"));

const Plan = loadable(() => import("../pages/Plan"));

const NotFound = loadable(() => import("../pages/NotFound"));
const Terms = loadable(() => import("../pages/Terms"));
const TermsCookies = loadable(() => import("../pages/TermsCookies"));

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Serviços  */}
      <Route path="/Servicos" element={<AllServices />} />

      {/* Serviço */}
      <Route path="/servico/:id" element={<UniService />} />

      {/* Comunidade */}
      <Route path="/Comunidade" element={<Community />} />

      {/* Plano */}
      <Route path="/D-plus" element={<Plan />} />

      {/* Desainic  */}
      <Route path="/termos" element={<Terms />} />
      <Route path="/termosCookies" element={<TermsCookies />} />

      {/* NotFound */}
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default routes;
