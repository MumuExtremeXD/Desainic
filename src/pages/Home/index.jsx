/* eslint-disable react/jsx-no-target-blank */
import React, { useMemo, useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerPrincipal,
  WrapperServices,
  Wrapper,
  WrapperPlan,
  ContantImg,
  CardBox,
  SearchSection,
  InputForm,
  NotFoundContainer,
  WrapperDplus,
  WrapperVantagens,
  WrapperCommunity,
} from "./styles";

import Header from "../../components/Headers/Header";
import { BiSearchAlt } from "react-icons/bi";

import data from "../../data/serviceData";

import Imgfundo from "../../images/fundoXD.jpg";
import Imgfundo2 from "../../images/fundoXD2.jpg";
import Footer from "../../components/Footer";

const Card = React.lazy(() => import("../../components/CardServices"));

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

function Home() {
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

      <ContainerPrincipal>
        <h1>Assuma o controle de suas mídias sociais</h1>

        <p>
          Mantenha-se organizado, economize tempo e gerencie facilmente suas
          mídias sociais com a caixa de entrada, publicação, relatórios,
          monitoramento e ferramentas de colaboração em equipe da Agorapulse.
        </p>

        <div>
          <Link to="/Servicos">Serviços</Link>
          <Link to="/D-plus">D-plus</Link>
        </div>
      </ContainerPrincipal>

      <ContantImg>
        <img alt="Fundo" src={Imgfundo}></img>
      </ContantImg>

      <WrapperServices>
        <h2>Design Gráfico e Mentoria Digital</h2>

        <SearchSection>
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
          <CardBox>
            {ServiceFiltrados
              ? ServiceFiltrados?.map((service) => (
                  <Suspense
                    fallback={<div>Carregando...</div>}
                    key={service.idService}
                  >
                    <Card Information={service} />
                  </Suspense>
                ))
              : false}
          </CardBox>

          {!ServiceFiltrados ? (
            <NotFoundContainer>
              {console.log(ServiceFiltrados)}
              <p>Não há dados...</p>
            </NotFoundContainer>
          ) : (
            false
          )}
        </Wrapper>
      </WrapperServices>

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
              <li>Desconto de 10% em todos os serviços</li>
              <li>Prioridade nos trabalhos</li>
              <li>
                Divulgação gratuita em nossas redes sociais (1 Publicação + 1
                Stories por mês)
              </li>
              <li>Auxílio na melhoria do conteudo</li>
              <li>Planilha organizacional de publicações</li>
              <li>4 Alterações sem cobrar</li>
            </ul>

            <p>Teste</p>
          </WrapperVantagens>

          <Link to="/Plan">Saiba mais →</Link>

          <h5>Além disso, você contribui para criação de um mundo melhor!</h5>
          <p>
            A cada plano fechado, será doado o valor de R$5,00 por mês para
            instituições de caridade.
          </p>
        </WrapperDplus>
      </WrapperPlan>

      <WrapperCommunity>
        <p>Um plano que cabe no seu bolso, repleto de recursos poderosos.</p>

        <p>
          Tudo o que você precisa para dominar as mídias sociais, fortalecido
          com o melhor suporte ao cliente.
        </p>

        <ContantImg>
          <img alt="Fundo" src={Imgfundo2}></img>
        </ContantImg>

        <Link to="/Plan">Saiba mais →</Link>
      </WrapperCommunity>

      <Footer />
    </Container>
  );
}

export default Home;
