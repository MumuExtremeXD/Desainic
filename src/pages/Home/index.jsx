/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  WrapperClients,
  ImgClients,
  WrapperImg,
  WrapperServices,
  CardBox,
  CardServices,
} from "./styles";

import Header from "../../components/Headers/Header";
import HeaderMobile from "../../components/Headers/HeaderMobile";

import Footer from "../../components/Footer";

import testeCard from "../../images/testeCard.png";
import testeClient from "../../images/Perfil.png";

function Home() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Container>
      <Header />
      <HeaderMobile />

      <WrapperClients>
        <p>Principais Categorias</p>

        <ImgClients>
          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>

          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>
          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>
          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>
          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>
          <WrapperImg>
            <img src={testeClient} alt="XD" />

            <p>Via Uni</p>
          </WrapperImg>
        </ImgClients>
      </WrapperClients>

      <WrapperServices>
        <h2>Nossos Serviços</h2>

        <CardBox>
          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Apresentações Profissionais</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Desenvolvimento de sites</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Canecas personalizadas</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Configuração de Redes Sociais</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>R$10,00</p>
            </div>
          </CardServices>
        </CardBox>
      </WrapperServices>

      <Footer />
    </Container>
  );
}

export default Home;
