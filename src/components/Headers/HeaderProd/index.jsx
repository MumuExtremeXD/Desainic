import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Nav, Content, Ul, EffectOverlay } from "./styles";

import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircle, IoIosArrowDropleftCircle } from "react-icons/io";

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
          <Link to={"../Servicos"}>
            <i>
              <IoIosArrowDropleftCircle />
            </i>
            Serviços
          </Link>
        </div>

        <Ul menu={open}>
          <div className="icon" onClick={() => setOpen(!open)}>
            <i>
              <IoMdCloseCircle />
            </i>
          </div>

          <li>
            <Link to={"../Servicos"}>Serviços</Link>
          </li>

          <li>
            <Link to={"../Comunidade"}>Comunidade</Link>
          </li>

          <li>
            <Link to={"../D-plus"}>D-Plus</Link>
          </li>
        </Ul>
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
