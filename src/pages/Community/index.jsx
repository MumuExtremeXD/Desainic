/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerPrincipal,
  WrapperPlan,
  ContantImg,
  ContantImgDplus,
  WrapperDplus,
  WrapperVantagens,
} from "./styles";

import Header from "../../components/Headers/Header";
import Imgfundo from "../../images/fundoXD6.jpg";
import ImgDplus from "../../images/dplus.png";
import Footer from "../../components/Footer";

function Community() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Container>
      <Header />

      <ContainerPrincipal>
        <h1>Faça parte da nossa comunidade</h1>
        <p>
          Notícias, dicas, promoções e suporte em um único lugar, está esperando
          o que? Venha fazer parte da nossa comunidade!
        </p>
        <div>
          <Link to="/D-plus">Quero entrar no grupo!</Link>
        </div>
      </ContainerPrincipal>

      <ContantImg>
        <img alt="Fundo" src={Imgfundo}></img>
      </ContantImg>

      <WrapperPlan>
        <h3>Um plano que cabe no seu bolso, repleto de recursos poderosos.</h3>

        <p>
          Tudo o que você precisa para dominar as mídias sociais, fortalecido
          com o melhor suporte ao cliente.
        </p>

        <WrapperDplus>
          <h4>Plano D-Plus</h4>
          <WrapperVantagens>
            <ul>
              <li>
                <strong>DESCONTO</strong> de 10% em todos os serviços
              </li>
              <li>
                <strong>PRIORIDADE</strong> nos trabalhos
              </li>
              <li>
                <strong>DIVULGAÇÃO GRATUITA</strong> em nossas redes sociais (1
                Publicação + 1 Story por mês)
              </li>
              <li>
                <strong>AUXÍLIO</strong> na melhoria do conteúdo
              </li>
              <li>
                <strong>4 ALTERAÇÕES</strong> sem cobrar
              </li>
              <li>
                Comunidade <strong>EXCLUSIVA</strong> para membros
              </li>
            </ul>

            <ContantImgDplus>
              <img alt="Plano D-Plus" src={ImgDplus}></img>
            </ContantImgDplus>
          </WrapperVantagens>

          <Link to="/Plan">Saiba mais →</Link>

          <h5>Além disso, você contribui para criação de um mundo melhor!</h5>
          <p>
            A cada plano fechado, será <strong>doado</strong> o valor de
            <strong> R$5,00</strong> por mês para instituições de caridade.
          </p>
        </WrapperDplus>
      </WrapperPlan>

      <Footer />
    </Container>
  );
}

export default Community;
