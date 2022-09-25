import React from "react";

import {
  Container,
  ContainerPrincipal,
  ContantImg,
  ContainerText,
  WrapperVantagens,
  ContainerCta,
} from "./styles";

import Imgfundo from "../../images/fundoXD2.jpg";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

function Plan() {
  return (
    <Container>
      <Header />

      <ContainerPrincipal>
        <h1>Com o plano D-PLUS</h1>

        <p>
          Mantenha-se organizado, economize tempo e gerencie facilmente suas
          mídias sociais com a caixa de entrada, publicação, relatórios,
          monitoramento e ferramentas de colaboração em equipe da Agorapulse.
        </p>

        <div>
          <a
            href={`https://api.whatsapp.com/send?phone=5515996918496&text=Oi`}
            target="_blank"
            rel="noreferrer"
          >
            Contratar
          </a>
        </div>
      </ContainerPrincipal>

      <ContantImg>
        <img alt="Fundo" src={Imgfundo}></img>
      </ContantImg>

      <ContainerText>
        <h1>Assuma o controle de suas mídias sociais</h1>

        <p>
          Mantenha-se organizado, economize tempo e gerencie facilmente suas
          mídias sociais com a caixa de entrada, publicação, relatórios,
          monitoramento e ferramentas de colaboração em equipe da Agorapulse.
        </p>
      </ContainerText>

      <WrapperVantagens>
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

        <ContantImg>
          <img alt="Fundo" src={Imgfundo}></img>
        </ContantImg>
      </WrapperVantagens>

      <ContantImg>
        <img alt="Fundo" src={Imgfundo}></img>
      </ContantImg>

      <ContainerCta>
        <p>
          A cada plano fechado, será <strong>doado</strong> o valor de
          <strong> R$5,00</strong> por mês para instituições de caridade.
        </p>

        <div>
          <a
            href={`https://api.whatsapp.com/send?phone=5515996918496&text=Oi`}
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
