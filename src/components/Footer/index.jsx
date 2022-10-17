/* eslint-disable react/jsx-no-target-blank  */

import React from "react";

import { Container, Wrapper, Row, Column, Copyright } from "./styles";

import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const data = new Date();
const year = data.getFullYear();

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <h4>Rede sociais</h4>
            <ul>
              <li>
                <a
                  href={"https://br.pinterest.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <BsPinterest />
                  </i>

                  <p>Pinterest</p>
                </a>
              </li>

              <li>
                <a
                  href={"https://www.instagram.com/desainic.oficial/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <AiFillInstagram />
                  </i>
                  <p>Instagram</p>
                </a>
              </li>

              <li>
                <a
                  href={"https://www.linkedin.com/company/desainic"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaLinkedinIn />
                  </i>

                  <p>LinkedIn</p>
                </a>
              </li>

              <li>
                <a
                  href={
                    "https://www.facebook.com/people/Desainic/100084489894770/"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaFacebookF />
                  </i>

                  <p>Facebook</p>
                </a>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Políticas da empresa</h4>
            <ul>
              <li>
                <Link to="/termos">Política de Privacidade</Link>
              </li>

              <li>
                <Link to="/termosCookies">Política de Cookies</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Nossos Parceiros</h4>
            <ul>
              <li>
                <a
                  href="https://www.asaas.com/r/fb/84a73b6c-554b-4f59-9850-d874d75cb430"
                  target="_blank"
                  rel="noreferrer"
                >
                  Asaas - Controle financeiro
                </a>
              </li>

              <li>
                <a
                  href="https://www.ganhedevolta.com.br/ind/1030141"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ganhe de volta - Cupons de Desconto
                </a>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Fale conosco</h4>
            <ul>
              <li>
                <p>
                  Clique no Link abaixo e converse diretamente com a nossa
                  equipe:
                </p>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=5515996439461&text=Oi`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">WhatsApp</button>
                </a>
              </li>

              <li>
                <p>
                  Você pode nos ligar nesse número
                  <a href="tel:+550199643-9461"> (15) 99643-9461</a>
                </p>
              </li>
            </ul>
          </Column>
        </Row>
      </Wrapper>

      <Copyright>
        <h4>
          ©Todos os direitos reservados {year} <br />
          Desainic
        </h4>
      </Copyright>
    </Container>
  );
}

export default Footer;
