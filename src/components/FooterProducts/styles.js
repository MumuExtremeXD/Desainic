import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #eee;

  color: var(--black);
  bottom: 0;

  padding: 30px 0px 0px;

  @media (max-width: 604px) {
    margin-bottom: 100px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0px 160px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 40px 160px;
  padding: 0px 25px;
`;

export const Column = styled.div`
  > h4 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 650;
    color: var(--third);
  }

  > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 5px 0px;

    > li {
      margin-bottom: 5px;

      > a {
        font-size: 15px;
        text-decoration: none;
        font-weight: 500;
        color: var(--black);
        transition: all 0.3s ease-in-out;

        gap: 10px 15px;

        display: flex;
        flex-wrap: nowrap;

        &:hover {
          color: var(--third);
        }

        > i {
          cursor: pointer;

          > svg {
            height: 18px;
            width: 18px;
            fill: var(--black);
          }
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  background: #ddd;
  height: 80px;
  width: 100%;

  bottom: 0;
  padding: 24px;

  > h4 {
    text-align: center;
    font-size: 17px;
    font-weight: 400;
  }

  @media (max-width: 425px) {
    > h4 {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
