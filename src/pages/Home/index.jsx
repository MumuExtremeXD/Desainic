/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  WrapperClients,
  ImgClients,
  WrapperImg,
  WrapperServices,
  CardBox,
  CardServices,
} from "./styles";

import Header from "../../components/Headers/HeaderMobile";
import Footer from "../../components/Footer";

import teste from "../../images/teste.png";
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

      <Wrapper>
        <img src={teste} alt="Variedades de grama - Qually Grama" />
      </Wrapper>

      <WrapperServices>
        <h2>Nossos Serviços</h2>

        <CardBox>
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
