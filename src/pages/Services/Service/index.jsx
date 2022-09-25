/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import {
  GiHighGrass,
  GiGroundSprout,
  GiArmorUpgrade,
  GiCharcuterie,
} from "react-icons/gi";

import {
  Container,
  Section,
  CardService,
  ServiceImg,
  ServiceInfo,
  BackUp,
  ContantImg,
  WrapperDplus,
  WrapperVantagens,
  Divider,
  UlProduct,
} from "./styles";

import Header from "../../../components/Headers/HeaderProd";
import Footer from "../../../components/Footer";

import { TiArrowUpThick } from "react-icons/ti";
import Imgfundo2 from "../../../images/fundoXD2.jpg";

import ImgEnlarge from "../../../components/ImgEnlarge";
import data from "../../../data/serviceData";

const scrollThreshold = 0.5;

const scrollTop = function () {
  window.scrollTo(0, 0);
};

function Service() {
  const { id } = useParams();

  const [scrollY, setScrollY] = useState(0);
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [urlImg, setUrlImg] = useState();

  const classes = scrollY >= scrollThreshold ? "scrollMenu" : "";

  const filterServiceId = data.filter((i) => i.idService == id);

  const PropsImg = function (param) {
    return setUrlImg(param);
  };

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    try {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <Container>
      <Header />

      {filterServiceId
        ? filterServiceId?.map((InforService) => (
            <Section key={InforService.idService}>
              <CardService>
                <ServiceInfo>
                  <ServiceImg>
                    <div>
                      <img
                        src={InforService.img}
                        alt=""
                        loading="lazy"
                        onClick={function () {
                          setIsImgVisible(true);
                          return PropsImg(InforService.img);
                        }}
                      />
                    </div>

                    <div>
                      <h1>{InforService.nameService}</h1>
                      <h3>{InforService.justificativa}</h3>

                      <p className="Text1">A partir de*</p>
                      <p className="TextPrice">
                        R${InforService.price}
                        <label> / {InforService.medida}</label>
                      </p>

                      <div>
                        <a
                          href={`https://api.whatsapp.com/send?phone=5515996918496&text=${InforService.nameService}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Solicitar serviço
                        </a>
                      </div>

                      <p className="Text2">
                        Você pode configurar as especificações do seu serviço e
                        conferir o preço da simulação de compra.
                      </p>

                      <p className="Text3">
                        * As imagens representadas são meramente ilustrativas.
                      </p>
                    </div>
                  </ServiceImg>
                  <h2>DETALHES DO SERVIÇO</h2>

                  <p>{InforService.description}</p>

                  <Divider />

                  <UlProduct>
                    {InforService.dica1 && (
                      <li>
                        <i>
                          <GiArmorUpgrade />
                        </i>

                        {InforService.dica1}
                      </li>
                    )}

                    {InforService.dica2 && (
                      <li>
                        <i>
                          <GiCharcuterie />
                        </i>

                        {InforService.dica2}
                      </li>
                    )}

                    {InforService.dica3 && (
                      <li>
                        <i>
                          <GiHighGrass />
                        </i>

                        {InforService.dica3}
                      </li>
                    )}

                    {InforService.dica4 && (
                      <li>
                        <i>
                          <GiGroundSprout />
                        </i>

                        {InforService.dica4}
                      </li>
                    )}
                  </UlProduct>
                </ServiceInfo>

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
                        <strong>DIVULGAÇÃO GRATUITA</strong>
                        em nossas redes sociais (1 Publicação + 1 Stories por
                        mês)
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
                      <img alt="Fundo" src={Imgfundo2}></img>
                    </ContantImg>
                  </WrapperVantagens>

                  <Link to="/Plan">Saiba mais →</Link>

                  <h5>
                    Além disso, você contribui para criação de um mundo melhor!
                  </h5>
                  <p>
                    A cada plano fechado, será <strong>doado</strong> o valor de
                    <strong> R$5,00</strong> por mês para instituições de
                    caridade.
                  </p>
                </WrapperDplus>
              </CardService>
            </Section>
          ))
        : false}

      <BackUp className={classes}>
        <TiArrowUpThick onClick={() => scrollTop()} />
      </BackUp>

      {isImgVisible ? (
        <ImgEnlarge
          Information={urlImg}
          OnClose={() => setIsImgVisible(false)}
        />
      ) : null}

      <Footer />
    </Container>
  );
}

export default Service;
