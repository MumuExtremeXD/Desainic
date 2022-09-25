import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;
`;

export const Section = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;

  @media (max-width: 645px) {
    font-size: 4.6rem;
  }

  > h2 {
    font-size: 7.8rem;

    @media (max-width: 645px) {
      font-size: 4.6rem;
    }

    @media (max-width: 425px) {
      font-size: 3.6rem;
    }

    > span {
      color: var(--primary);
    }
  }
`;

export const CardService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0 0 0;
  padding: 5px 20px;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 425px) {
    margin: 0;
  }
`;

export const ServiceImg = styled.div`
  display: flex;
  max-width: 1180px;

  gap: 50px;

  justify-content: center;

  @media (max-width: 425px) {
    gap: 0px;
    margin-top: 20px;
    flex-direction: column;
  }

  > div {
    width: 100%;
    max-width: 950px;

    @media (max-width: 425px) {
      max-width: 100%;
      width: 100%;
    }

    > img {
      cursor: pointer;
      width: 100%;
      max-width: 680px;
      object-fit: cover;
    }

    > h1 {
      color: #333c43;
      font-size: 36px;

      @media (max-width: 650px) {
        font-size: 30px;
      }

      @media (max-width: 425px) {
        max-width: 100%;
        width: 100%;
        margin: -5px 0px 0px 0px;
      }
    }

    > h3 {
      color: #333c43;
      font-size: 14px;
    }

    > p {
      min-width: 250px;
      max-width: 450px;

      @media (max-width: 650px) {
        margin-top: 15px;
        max-width: 100%;
        font-size: 18px;
      }
    }

    > .Text1 {
      margin-top: 20px;
      font-size: 10px;
      min-width: 250px;
      max-width: 450px;

      @media (max-width: 650px) {
        margin-top: 10px;
        font-size: 15px;
      }
    }

    > .TextPrice {
      margin-bottom: 25px;
      font-size: 32px;

      font-weight: bold;
      color: #008ffc;

      min-width: 250px;
      max-width: 450px;

      @media (max-width: 650px) {
        font-size: 35px;
        margin-bottom: 0px;
        line-height: 20px;
      }

      > label {
        font-size: 10px;

        font-weight: 400;
        color: #333c43;

        @media (max-width: 650px) {
          font-size: 13px;
        }
      }
    }

    > div {
      @media (max-width: 425px) {
        margin: -10px 0px 0px 0px;
      }

      a {
        border-radius: 46px;
        padding: 16px 38px;

        font-size: 14px;
        background-color: var(--primary);

        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

        @media (max-width: 650px) {
          font-size: 20px;
        }

        @media (max-width: 350px) {
          font-size: 14px;
        }
      }
    }

    > .Text2 {
      margin-top: 45px;
      font-size: 13px;
      min-width: 250px;
      max-width: 450px;

      @media (max-width: 650px) {
        max-width: 100%;
        margin-top: 15px;
        font-size: 14px;
      }
    }

    > .Text3 {
      margin-top: 15px;
      font-size: 13px;
      min-width: 250px;
      max-width: 450px;

      @media (max-width: 650px) {
        max-width: 100%;
        margin-top: 15px;
        font-size: 14px;
      }
    }
  }
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-top: 35px;
    font-size: 32px;
    min-width: 250px;
    max-width: 450px;

    @media (max-width: 650px) {
      font-size: 22px;
    }
  }

  > p {
    max-width: 850px;
    margin: 10px 0 30px;

    padding: 1px 0px;
    font-size: 16px;

    text-align: justify;
    color: #555355;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`;

export const UlAplication = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  > li {
    color: #555355;
    font-size: 20px;
  }

  margin-bottom: 40px;
`;

export const BackUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  cursor: pointer;

  background-color: var(--gray);
  border-radius: 100%;

  right: 20px;
  bottom: 25px;

  z-index: 9000;

  svg {
    fill: #fff;
    font-size: 3.9rem;
  }

  transition: all 0.2s ease;
  visibility: hidden;
  opacity: 0.6;

  @media (min-width: 320px) {
    &.scrollMenu {
      visibility: visible;
      box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.33);
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const WrapperDplus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(122, 102, 240, 0.2);
  border-radius: 20px;

  max-width: 1180px;
  width: 100%;

  margin-bottom: 80px;

  padding: 40px 0px 40px 0px;

  @media (max-width: 425px) {
    padding: 40px 10px 0px 10px;
  }

  > h4 {
    color: #333c43;
    max-width: 940px;
    font-weight: 800;
    font-size: 40px;
    padding: 0 15px;
    margin-bottom: 20px;

    @media (max-width: 650px) {
      padding: 0 10px;
      font-size: 40px;
    }

    @media (max-width: 425px) {
      font-size: 34px;
    }
  }

  > h5 {
    color: #333c43;
    max-width: 680px;
    font-weight: 800;
    font-size: 30px;

    padding: 0 15px;
    margin-bottom: 20px;

    text-align: center;

    @media (max-width: 650px) {
      font-size: 25px;
    }

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }

  > a {
    text-align: center;
    max-width: 240px;
    width: 100%;

    font-weight: 500;
    border-radius: 44px;
    font-size: 22px;

    padding: 25px;
    background-color: #fff;
    margin-bottom: 35px;

    transition: all 0.3s;
    color: #7a66f0;

    &:hover {
      background-color: #7a66f0;
      color: #fff;
    }
  }

  > p {
    max-width: 700px;
    font-weight: 500;
    font-size: 22px;
    padding: 0 15px;
    color: #444;

    text-align: center;
  }
`;

export const WrapperVantagens = styled.div`
  display: flex;
  width: 100%;

  padding: 40px 0px 40px 80px;

  @media (max-width: 768px) {
    padding: 40px 30px 0px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 425px) {
    padding: 0px;
  }

  > ul {
    text-align: left;
    max-width: 440px;

    @media (max-width: 425px) {
      padding: 0px 20px 0px 20px;
    }

    > li {
      font-size: 20px;
      margin-bottom: 10px;

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }
  }

  > div > img {
    @media (max-width: 768px) {
      margin-top: 30px;
    }
  }
`;

export const ContantImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    max-width: 1240px;
    width: 100%;
  }

  margin-bottom: 40px;
`;

export const UlProduct = styled.ul`
  list-style: none;

  margin-bottom: 40px;

  > li {
    margin-bottom: 13px;
    font-size: 18px;

    display: flex;
    align-items: center;
    gap: 0 8px;

    color: #888388;

    > i {
      font-size: 25px;
      color: var(--third);
    }
  }
`;

export const Divider = styled.div`
  border-top-color: rgb(221, 221, 221);
  border-top-width: 1px !important;
  border-top-style: solid !important;

  margin: 30px 0px;
`;
