/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import {
  Container,
  Section,
  SearchSection,
  CardService,
  ServiceImg,
  ServiceInfo,
  BackUp,
} from "./styles";

import Header from "../../../components/Headers/HeaderProd";
import Footer from "../../../components/Footer";

import { TiArrowUpThick } from "react-icons/ti";

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
            <Section key={InforService.idDica}>
              <SearchSection>
                <div className="Headline">
                  <h2>{InforService.title}</h2>
                </div>
              </SearchSection>

              <CardService>
                <ServiceInfo>
                  <p>{InforService.description}</p>

                  <ServiceImg>
                    <div className="Img1">
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

                    <div className="Img2">
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
                  </ServiceImg>

                  <p>{InforService.description}</p>
                </ServiceInfo>
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
