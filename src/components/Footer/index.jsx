/* eslint-disable react/jsx-no-target-blank  */

// XD
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
                  href={"https://www.instagram.com/"}
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
                  href={"https://www.linkedin.com/company/"}
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
                  href={"https://www.facebook.com/"}
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
                <a href="XD" target="_blank" rel="noreferrer">
                  XD1
                </a>
              </li>

              <li>
                <a href="XD" target="_blank" rel="noreferrer">
                  XD2
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
                  href={`https://api.whatsapp.com/send?phone=5515996159898&text=Oi`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">WhatsApp</button>
                </a>
              </li>

              <li>
                <p>
                  Você pode nos ligar nesse número
                  <a href="tel:+5501599691-8493"> (15) 99691-8493</a>
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
