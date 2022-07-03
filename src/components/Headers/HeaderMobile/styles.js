import styled from "styled-components";

/* Menu */

export const Nav = styled.div`
  position: fixed;
  margin: 0 auto;

  top: 0;
  right: 0;
  left: 0;

  z-index: 5;
  width: 100%;

  padding: 0px;
  transition: all 0.2s ease-in-out;

  > div > div > i {
    color: #666366;
  }

  display: none;

  @media (max-width: 768px) {
    display: initial;
    padding: 3px 0px;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  transition: all 0.4s ease;

  max-width: 1440px;
  margin: 0 auto;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0;
  padding: 0px;

  > .icon {
    display: none;
  }

  > li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    list-style: none;
    transition: all 0.4s ease;

    > a {
      font-size: 26px;
      font-weight: 500;
      transition: all 0.3s;

      text-decoration: none;

      &:hover {
        color: var(--primary);
      }
    }
  }

  height: 80px;
  width: 100%;

  background-color: #fff;

  > li {
    > a {
      font-size: 28px;
      color: var(--black);
    }
  }
`;
