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
  WrapperChroma,
} from "./styles";

import Header from "../../components/Headers/Header";
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

      <Wrapper>
        <img src={teste} alt="Variedades de grama - Qually Grama" />
      </Wrapper>

      <WrapperClients>
        <p>Alguns dos nossos clientes</p>

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
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>

          <CardServices>
            <Link to={"/grama-esmeralda/6"}>
              <img src={testeCard} alt="esmeralda" loading="lazy" />
            </Link>

            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </CardServices>
        </CardBox>
      </WrapperServices>

      {/* <WrapperChroma>
        <h2>Faça parte dessa Nação</h2>

        <div>
          <div>
            <div>
              <h4>Nada é mais importante que você.</h4>
              <p>
                Seu projeto não vai ficar em segundo plano porque alguém “mais
                importante” apareceu. Você nunca será atribuído a um “time B”;
                Prezamos pela qualidade do nosso serviço como principal
                diferencial dentro do mercado!
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4>Nada é mais importante que você.</h4>
              <p>
                Seu projeto não vai ficar em segundo plano porque alguém “mais
                importante” apareceu. Você nunca será atribuído a um “time B”;
                Prezamos pela qualidade do nosso serviço como principal
                diferencial dentro do mercado!
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4>Nada é mais importante que você.</h4>
              <p>
                Seu projeto não vai ficar em segundo plano porque alguém “mais
                importante” apareceu. Você nunca será atribuído a um “time B”;
                Prezamos pela qualidade do nosso serviço como principal
                diferencial dentro do mercado!
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4>Nada é mais importante que você.</h4>
              <p>
                Seu projeto não vai ficar em segundo plano porque alguém “mais
                importante” apareceu. Você nunca será atribuído a um “time B”;
                Prezamos pela qualidade do nosso serviço como principal
                diferencial dentro do mercado!
              </p>
            </div>
          </div>
        </div>
      </WrapperChroma> */}

      <Footer />
    </Container>
  );
}

export default Home;
