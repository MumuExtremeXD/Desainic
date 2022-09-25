import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);

  padding: 0px 10px;

  margin: 85px auto 0px;

  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    margin: 6% auto 0px;
  }

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
    margin: 70px auto 0px;
    padding: 15px;
  }

  overflow: hidden;

  > h1 {
    color: #333c43;
    max-width: 740px;
    font-size: 64px;

    @media (max-width: 650px) {
      font-size: 40px;
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

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  text-align: center;

  max-width: 1240px;
  border-radius: 26px;
  background: var(--primary);

  padding: 40px 10px 60px 10px;

  margin: 5px auto 25px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  overflow: hidden;

  > h1 {
    color: #fff;
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
    margin-top: 16px;
    color: #fff;
    max-width: 740px;
    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

export const WrapperVantagens = styled.div`
  display: flex;
  width: 100%;

  margin: 30px 0px;

  justify-content: center;
  padding: 40px 0px 40px 80px;

  @media (max-width: 768px) {
    padding: 40px 60px 40px 60px;
    flex-direction: column;
  }

  > ul {
    text-align: left;

    max-width: 440px;

    > li {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  > div > img {
    @media (max-width: 768px) {
      margin-top: 30px;
    }
  }
`;

export const ContainerCta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  text-align: center;

  margin: 35px auto 45px;

  @media (max-width: 768px) {
    margin: 70px auto 0px;
    padding: 15px;
  }

  overflow: hidden;

  > p {
    max-width: 740px;
    font-size: 24px;
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
