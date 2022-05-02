/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import { Nav, Ul } from "./styles";

import { CgMenuRight } from "react-icons/cg";

const scrollThreshold = 1;

function Header() {
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
      <Ul>
        <li>
          <a href="#">
            <CgMenuRight />
          </a>
        </li>

        <li>
          <a href="#">
            <CgMenuRight />
          </a>
        </li>

        <li>
          <a href="#">
            <CgMenuRight />
          </a>
        </li>

        <li>
          <a href="#">
            <CgMenuRight />
          </a>
        </li>
      </Ul>
    </Nav>
  );
}

export default Header;
