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

import data from "../../../data/grassData";

import { BiSearchAlt } from "react-icons/bi";

import Header from "../../../components/Headers/Header";
import Footer from "../../../components/Footer";

const Card = React.lazy(() => import("../../../components/CardProducts"));

const FiltrarItens = (data, busca) => {
  const lowerBusca = busca.toLowerCase();

  try {
    if (
      data.filter((grama) => grama?.keyWords.toLowerCase().includes(lowerBusca))
        .length > 0
    ) {
      return data.filter((grama) =>
        grama?.keyWords.toLowerCase().includes(lowerBusca)
      );
    }
  } catch (error) {
    return console.error(error);
  }
};

function Products() {
  const [busca, setBusca] = useState("");
  const ProdsFiltrados = useMemo(() => FiltrarItens(data, busca), [busca]);

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
          <h2>Variedades de Grama</h2>
          <p>Qualidade e Procedência Comprovada</p>
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
          {ProdsFiltrados
            ? ProdsFiltrados?.map((prod) => (
                <Suspense
                  fallback={<div>Carregando...</div>}
                  key={prod.idGrama}
                >
                  <Card Information={prod} />
                </Suspense>
              ))
            : false}
        </Box>

        {!ProdsFiltrados ? (
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

export default Products;
