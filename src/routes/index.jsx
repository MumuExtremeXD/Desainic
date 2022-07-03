import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Home from "../pages/Home";

const ServiceDesignGraph = loadable(() =>
  import("../pages/Services/DesignGraph")
);
const ServiceDesignVirtual = loadable(() =>
  import("../pages/Services/DesignVirt")
);
const ServiceWebDesign = loadable(() => import("../pages/Services/WebDesign"));
const ServiceMarketingDigital = loadable(() =>
  import("../pages/Services/MarketingDigital")
);

const AllServices = loadable(() => import("../pages/Services/AllServices"));

const NotFound = loadable(() => import("../pages/NotFound"));
const Terms = loadable(() => import("../pages/Terms"));
const TermsCookies = loadable(() => import("../pages/TermsCookies"));

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Serviços  */}
      <Route path="/Servicos" element={<AllServices />} />

      <Route path="/Designer-Grafico" element={<ServiceDesignGraph />} />
      <Route path="/Designer-Virtual" element={<ServiceDesignVirtual />} />
      <Route path="/Web Designer" element={<ServiceWebDesign />} />
      <Route path="/Marketing Digital" element={<ServiceMarketingDigital />} />

      {/* Empresa  */}
      <Route path="/termos" element={<Terms />} />
      <Route path="/termosCookies" element={<TermsCookies />} />

      {/* NotFound */}
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default routes;
