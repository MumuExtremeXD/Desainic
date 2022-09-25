import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);

  margin: 6% auto 0px;

  flex-direction: column;
  position: relative;

  @media (max-width: 425px) {
    margin: 7% auto 0px;
  }
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  text-align: center;

  margin: 35px auto 0px;

  @media (max-width: 768px) {
    margin: 85px auto 0px;
    padding: 15px;
  }

  overflow: hidden;

  > h1 {
    color: #333c43;
    max-width: 740px;
    font-size: 64px;

    @media (max-width: 650px) {
      font-size: 42px;
    }

    @media (max-width: 425px) {
      font-size: 34px;
    }
  }

  > p {
    max-width: 740px;
    @media (max-width: 650px) {
      margin-top: 15px;
      font-size: 18px;
    }
  }

  > div {
    margin: 30px 0px 30px 0px;
    display: flex;
    gap: 0px 30px;
    max-width: 740px;

    > a {
      border-radius: 46px;
      padding: 16px 38px;

      font-size: 26px;
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
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;

  margin: 0 auto;
  top: 0;

  > div {
    margin: 0 auto;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 100%;

    z-index: 4;

    max-width: 650px;
    width: 100%;
    min-width: 290px;

    display: block;
    padding: 0px 20px;

    @media (max-width: 425px) {
      padding: 0px 0px;
      max-width: 100%;
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;

      border-radius: 8px;
      background: #fff;

      margin-top: 25px;
      box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);

      > label > svg {
        margin-left: 25px;
        outline: none;
        font-size: 25px;
        cursor: pointer;
        fill: var(--third);
      }
    }
  }
`;

export const InputForm = styled.input`
  outline: none;

  width: 100%;
  height: 55px;
  padding: 0px 15px 0px 15px;

  border: none;

  cursor: text;

  line-height: 28px;
  font-size: 17px;
  font-weight: 400;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;

  > p {
    padding-top: 40px;

    font-weight: bold;
    font-size: 3.4rem;

    color: var(--gray);
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

export const WrapperServices = styled.div`
  max-width: 1240px;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 0px 0px 45px 0px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 0px;
  }

  > h2 {
    color: #333c43;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    max-width: 840px;

    @media (max-width: 650px) {
      font-size: 38px;
    }

    @media (max-width: 425px) {
      font-size: 34px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  text-align: center;
`;

export const CardBox = styled.div`
  margin-top: 20px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));

  justify-content: center;
  align-items: center;

  border-radius: 50% 50% 0 0;
  padding: 5px 15px 10px;

  grid-gap: 30px 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 290px));
    grid-gap: 20px 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
`;

export const CardServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  flex-direction: column;

  @media (max-width: 768px) {
    max-width: minmax(240px, 280px);
    min-width: minmax(120px, 160px);
  }

  > div {
    text-align: center;
  }

  > div > h3 {
    font-size: 1.2em;

    font-weight: 360;
    margin: 0px 0px 10px;
    line-height: auto;

    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 400px) {
      max-width: 15ch;
      overflow: initial;
      text-overflow: initial;
      white-space: normal;
      font-size: 1em;
    }
  }

  > div > p {
    font-size: 2.2em;
    font-weight: 560;
    margin-bottom: 1px;
  }

  > a {
    img {
      border-radius: 12px;
      max-width: 640px;

      width: 100%;
    }
  }
`;

export const WrapperChroma = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1050px;
  width: 100%;

  padding-top: 35px;
  flex-direction: column;

  > h2 {
    color: #000;

    font-size: 2.2rem;
    font-weight: 700;

    @media (max-width: 768px) {
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    flex-wrap: wrap;
    gap: 20px;

    margin: 35px 0px 65px;
  }

  @media (max-width: 525px) {
    padding-top: 40px;
  }

  @media (max-width: 485px) {
    padding-top: 20px;
  }

  > div > div > div {
    position: relative;
    z-index: 2;

    > h4 {
      margin-top: 0px;
      font-size: 25px;
      transition: 0.5s;
    }

    > p {
      margin-top: 20px;
      font-size: 18px;
      transition: 0.5s;
    }
  }

  > div > div {
    position: relative;
    max-width: 420px;

    width: 100%;
    padding: 40px;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media (max-width: 768px) {
      max-width: 340px;
    }

    @media (max-width: 485px) {
      max-width: 420px;
      padding: 25px;
    }

    &:before {
      content: "";
      position: absolute;

      left: 0px;

      bottom: calc(-100% + 4px);
      width: 100%;
      height: 100%;

      background: #000;

      z-index: 1;
      transition: 0.5s ease-in-out;
    }

    &:nth-child(1):before {
      background: #00f;
    }

    &:nth-child(2):before {
      background: #a0a;
    }

    &:nth-child(3):before {
      background: #50f;
    }

    &:hover:before {
      bottom: 0;
    }
  }
`;

export const WrapperPlan = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  flex-direction: column;
  text-align: center;

  > h3 {
    color: #333c43;
    max-width: 940px;
    font-weight: 700;
    font-size: 50px;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  > p {
    max-width: 760px;
    font-weight: 500;
    font-size: 20px;
    padding: 0 15px;
    margin-bottom: 70px;
    color: #444;
  }
`;

export const WrapperDplus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(122, 102, 240, 0.2);
  border-radius: 20px;

  max-width: 980px;
  width: 100%;

  padding: 40px 0px 40px 0px;

  > h4 {
    color: #333c43;
    max-width: 940px;
    font-weight: 800;
    font-size: 40px;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  > h5 {
    color: #333c43;
    max-width: 680px;
    font-weight: 800;
    font-size: 30px;

    padding: 0 15px;
    margin-bottom: 20px;
  }

  > a {
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
    max-width: 760px;
    font-weight: 500;
    font-size: 20px;
    padding: 0 15px;
    color: #444;
  }
`;

export const WrapperVantagens = styled.div`
  display: flex;
  width: 100%;

  padding: 40px 0px 40px 80px;

  > ul {
    text-align: left;

    max-width: 440px;

    > li {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const WrapperCommunity = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  flex-direction: column;
  text-align: center;

  > p:first-child {
    color: #333c43;
    max-width: 940px;
    font-weight: 700;
    font-size: 50px;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  > p {
    max-width: 760px;
    font-weight: 500;
    font-size: 20px;
    padding: 0 15px;
    margin-bottom: 70px;
    color: #444;
  }

  > a {
    max-width: 240px;
    width: 100%;

    font-weight: 500;
    border-radius: 44px;
    font-size: 22px;

    padding: 25px;
    background-color: var(--primary);

    margin-bottom: 35px;

    transition: all 0.3s;
    color: #fff;

    &:hover {
      background-color: #7a66f0;
    }
  }
`;
