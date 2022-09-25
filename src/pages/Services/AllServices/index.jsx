/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect, Suspense } from "react";

import {
  Container,
  SearchSection,
  Wrapper,
  Box,
  InputForm,
  NotFoundContainer,
} from "./styles";

import data from "../../../data/serviceData";
import { BiSearchAlt } from "react-icons/bi";

import Header from "../../../components/Headers/Header";
import Footer from "../../../components/Footer";

const Card = React.lazy(() => import("../../../components/CardServices"));

const FiltrarItens = (data, busca) => {
  const lowerBusca = busca.toLowerCase();

  try {
    if (
      data.filter((service) =>
        service?.nameService.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((service) =>
        service?.nameService.toLowerCase().includes(lowerBusca)
      );
    }
  } catch (error) {
    return console.error(error);
  }
};

function Services() {
  const [busca, setBusca] = useState("");
  const ServiceFiltrados = useMemo(() => FiltrarItens(data, busca), [busca]);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Container>
      <Header />

      <SearchSection>
        <div className="Headline">
          <h2>Design Gráfico e Mentoria Digital</h2>
        </div>

        <div>
          <section>
            <label>
              <BiSearchAlt />
            </label>

            <InputForm
              type="text"
              placeholder="Pesquisar..."
              onChange={(ev) => setBusca(ev.target.value)}
            />
          </section>
        </div>
      </SearchSection>
      <Wrapper>
        <Box>
          {ServiceFiltrados
            ? ServiceFiltrados?.map((prod) => (
                <Suspense
                  fallback={<div>Carregando...</div>}
                  key={prod.idService}
                >
                  <Card Information={prod} />
                </Suspense>
              ))
            : false}
        </Box>

        {!ServiceFiltrados ? (
          <NotFoundContainer>
            <p>Não há dados...</p>
          </NotFoundContainer>
        ) : (
          false
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default Services;
