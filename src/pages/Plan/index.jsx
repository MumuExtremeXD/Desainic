import React from "react";

import {
  Container,
  ContainerPrincipal,
  ContantImg,
  ContantImg2,
  ContainerText,
  ContainerCta,
} from "./styles";

import Imgfundo1 from "../../images/fundoXD3.jpg";
import Imgfundo2 from "../../images/fundoXD4.jpg";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

function Plan() {
  return (
    <Container>
      <Header />

      <ContainerPrincipal>
        <h1>D-PLUS</h1>

        <p>
          Mantenha-se organizado, economize tempo e gerencie facilmente suas
          mídias sociais com a caixa de entrada, publicação, relatórios,
          monitoramento e ferramentas.
        </p>
      </ContainerPrincipal>

      <ContantImg>
        <img alt="Fundo" src={Imgfundo1}></img>
      </ContantImg>

      <ContainerText>
        <h1>Benefícios</h1>

        <ul>
          <li>
            <strong>DESCONTO</strong> de 10% em todos os serviços
          </li>
          <li>
            <strong>PRIORIDADE</strong> nos trabalhos
          </li>
          <li>
            <strong>DIVULGAÇÃO GRATUITA</strong>
            em nossas redes sociais (1 Publicação + 1 Stories por mês)
          </li>
          <li>
            <strong>AUXÍLIO</strong> na melhoria do conteudo
          </li>
          <li>Planilha organizacional de publicações</li>
          <li>
            <strong>4 ALTERAÇÕES</strong> sem cobrar
          </li>
          <li>
            Comunidade <strong>EXCLUSIVA</strong> para membros
          </li>
        </ul>

        <div>
          <a
            href={`https://www.asaas.com/c/022571173933`}
            target="_blank"
            rel="noreferrer"
          >
            Contratar
          </a>
        </div>
      </ContainerText>

      <ContantImg2>
        <img alt="Fundo que ilustra a doação" src={Imgfundo2}></img>
      </ContantImg2>

      <ContainerCta>
        <p>
          A cada plano fechado, será <strong>doado</strong> o valor de
          <strong> R$5,00</strong> por mês para instituições de caridade.
        </p>

        <div>
          <a
            href={`https://www.asaas.com/c/022571173933`}
            target="_blank"
            rel="noreferrer"
          >
            Contratar
          </a>
        </div>
      </ContainerCta>

      <Footer />
    </Container>
  );
}

export default Plan;
