import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Nav,
  Content,
  Ul,
  DivMenuDesktop,
  UlDesktop,
  EffectOverlay,
} from "./styles";

import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";

import logo from "../../../images/Perfil.png";

const scrollThreshold = 1;

function Header() {
  const [open, setOpen] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const classes = scrollY >= scrollThreshold ? "scrollMenu" : "";

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Nav className={classes}>
      <EffectOverlay menu={open} onClick={() => setOpen(!open)} />

      <Content menu={open}>
        <div className="logo">
          <Link to={"../"}>
            <img src={logo} alt="Desainic" />
          </Link>
        </div>

        <Ul menu={open}>
          <div className="icon" onClick={() => setOpen(!open)}>
            <i>
              <IoMdCloseCircle />
            </i>
          </div>

          <li>
            <Link to={"../"}>Início</Link>
          </li>

          <li>
            <Link to={"../gramas"}>Gramas</Link>
          </li>

          <li>
            <Link to={"../quallystrato/7"}>Qually Strato</Link>
          </li>

          <li>
            <Link to={"../sobre-nos"}>Sobre nós</Link>
          </li>

          <li>
            <Link to={"../ajuda"}>Ajuda</Link>
          </li>

          <li>
            <a
              href={`https://api.whatsapp.com/send?phone=5515996159898&text=Olá!`}
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Fale Conosco</button>
            </a>
          </li>
        </Ul>

        <DivMenuDesktop>
          <UlDesktop className={classes}>
            <li>
              <Link to={"../Servicos"}>Serviços</Link>
            </li>

            <li>
              <Link to={"../Comunidade"}>Comunidade</Link>
            </li>

            <li>
              <Link to={"../D-plus"}>D-Plus</Link>
            </li>
          </UlDesktop>
        </DivMenuDesktop>

        <div className="icon" onClick={() => setOpen(!open)}>
          <i>
            <CgMenuRight />
          </i>
        </div>
      </Content>
    </Nav>
  );
}

export default Header;
