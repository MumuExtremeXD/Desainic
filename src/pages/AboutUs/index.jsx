import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Content,
  ContentDivider,
  ContainerHalfText,
  ContainerHalfText2,
  WrapperText,
} from "./styles";

import VideoQually from "../../videos/Sobrenos.mp4";

import QuallyGrama from "../../images/poster.webp";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

function Projects() {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerHalfText>
          <h2>Nossa História</h2>

          <p>
            Fundada em <label>1999</label>, no interior de São Paulo na cidade
            de Tatuí, a <label>Qually Grama</label> iniciou o seu cultivo de
            grama com a Esmeralda que hoje é a espécie mais comercializada do
            país, com a ambição de entregar a maior qualidade do mercado do
            agronegócio. Com o sonho e dedicação desenvolvemos novas técnicas de
            cultivo, para alcançar sustentabilidade, excelência e agilidade.
            Atualmente a <label>Qually Grama</label> comercializa seis
            variedades diferentes, sendo a Discovery nossa exclusividade ao ser
            produzida apenas por nós.
          </p>

          <p>
            <label> Nosso compromisso</label> é trabalhar ecologicamente,
            economicamente, socialmente e culturalmente correto. Nosso primeiro
            escritório funcionava com apenas um colaborador, sendo ele o próprio
            fundador
            <label> Isaac Bueno de Miranda</label>, que hoje é o nosso
            presidente. Atualmente contamos com{" "}
            <label>
              mais de 2 filiais e mais de 100 funcionários capacitados
            </label>
            .
          </p>
        </ContainerHalfText>
      </Content>

      <ContentDivider>
        <WrapperText>
          <h3>Momentos que estamos com você</h3>

          <video controls loop poster={QuallyGrama} src={VideoQually}>
            <p>Seu navegador não suporta esse formato de vídeo.</p>
          </video>

          <Link to={"../gramas"}>Torne o mundo mais verde</Link>
        </WrapperText>
      </ContentDivider>

      <ContainerHalfText2>
        <h4>Nosso Propósito</h4>

        <p>Para nós a grama representa a vida.</p>

        <p>São pessoas trabalhando juntas por um mundo melhor.</p>

        <p>É se sentir leve e confortável com a natureza.</p>

        <p>Mas acima de tudo, é a construção de momentos, como</p>

        <p>uma risada, um jogo ou uma brincadeira.</p>

        <h5>Nascemos e crescemos por você! </h5>
      </ContainerHalfText2>

      <Footer />
    </Container>
  );
}

export default Projects;
