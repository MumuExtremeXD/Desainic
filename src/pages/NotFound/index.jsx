import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper } from "./styles";

import Img404 from "../../images/404/404img.png";

import Header from "../../components/Headers/HeaderProject";
import Footer from "../../components/Footer";

function NotFound() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Link to={"../"}>
          <img src={Img404} alt="ts" loading="lazy" />
        </Link>

        <Link to={"../"}>
          <p> Voltar ao íncio</p>
        </Link>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default NotFound;
