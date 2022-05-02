import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);

  margin: 0 auto;

  flex-direction: column;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0px;

  > img {
    width: 100%;
    max-width: 1200px;

    padding: 0 13px;

    @media (min-width: 800px) {
      max-width: 900px;
    }
  }
`;

export const WrapperClients = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  flex-direction: column;

  padding-top: 60px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 30px;
  }

  > p {
    color: #000;
    font-size: 2.2rem;
    font-weight: 700;

    @media (max-width: 768px) {
      padding: 0px 15px;
    }
  }
`;

export const ImgClients = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 0 25px;
  margin: 25px 0px 25px;

  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 34px;

    > a > img {
      border-radius: 12px;
      max-width: 420px;
      width: 100%;
    }

    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      display: none; /* Safari and Chrome */
    }
  }

  @media (max-width: 425px) {
    padding: 0 15px;

    > a > img {
      border-radius: 12px;
      max-width: 380px;
      width: 100%;
    }
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    border-radius: 50%;
    max-width: 120px;
    min-width: 100px;
    width: 70%;
  }
`;

export const WrapperServices = styled.div`
  max-width: 1240px;
  margin-top: 20px;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 30px 0px 45px 0px;

  @media (max-width: 750px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 0px 0px 0px;
  }

  > h2 {
    color: #000;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
      padding: 0px 15px;
    }
  }
`;

export const CardBox = styled.div`
  margin-top: 20px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));

  justify-content: center;
  align-items: center;

  border-radius: 50% 50% 0 0;
  padding: 5px 15px;

  grid-gap: 30px 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 350px));

    justify-content: center;
    align-items: center;
    grid-gap: 20px 20px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(minmax(150px, 1fr));

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;

export const CardServices = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-direction: column;

  > div {
    padding: 10px 0px;

    @media (max-width: 550px) {
      padding: 0px 15px;
    }
  }

  > div > h3 {
    font-size: 2.2em;

    font-weight: 560;
    line-height: 55px;

    margin-bottom: 5px;
  }

  > div > p {
    font-size: 1.1em;
    text-align: left;
  }

  > a {
    img {
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
    padding: 0px 15px;
    color: #000;

    font-size: 2.2rem;
    font-weight: 700;

    @media (max-width: 768px) {
      padding: 0px 20px;
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
    padding: 0 20px;
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
