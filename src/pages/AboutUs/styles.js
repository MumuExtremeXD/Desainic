import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 145px;
  padding: 0px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;

    align-items: center;
    text-align: justify;

    margin-top: 75px;
    padding: 0px 10px;
  }
`;

export const ContentDivider = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 45px;
  padding: 0px;

  @media (max-width: 685px) {
    margin-top: 85px;
  }

  @media (max-width: 425px) {
    margin-top: 65px;
  }
`;

export const ContainerHalfText = styled.div`
  > h2 {
    padding: 0 60px;
    font-size: 6.4em;
    color: var(--third);

    text-align: center;

    margin-bottom: 15px;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px 5px;
    }

    @media (max-width: 415px) {
      font-size: 4.4em;
    }

    @media (max-width: 350px) {
      font-size: 2.3em;
    }
  }

  > p {
    font-size: 1.33em;
    padding: 15px 60px;
    text-align: justify;

    text-align: center;

    color: #888388;

    > label {
      color: var(--third);
    }

    @media (max-width: 1024px) {
      padding: 15px 20px;
    }

    @media (max-width: 640px) {
      padding: 15px 12px;

      text-align: justify;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const ContainerHalfText2 = styled.div`
  margin: 40px 0px 160px;

  > h4 {
    padding: 0 60px;
    font-size: 3.2em;

    text-align: center;

    margin-bottom: 15px;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px 5px;
    }

    @media (max-width: 350px) {
      font-size: 2.3em;
      color: var(--third);
    }
  }

  > p {
    font-size: 1.6em;
    padding: 12px 60px;
    text-align: justify;

    text-align: center;

    color: #888388;

    @media (max-width: 1024px) {
      padding: 8px 20px;
    }

    @media (max-width: 640px) {
      padding: 8px 5px;
    }
  }

  > h5 {
    font-size: 1.6em;
    padding: 4px 60px;
    text-align: justify;

    text-align: center;

    color: var(--third);

    @media (max-width: 1024px) {
      padding: 8px 20px;
    }

    @media (max-width: 640px) {
      padding: 8px 5px;
    }
  }
`;

export const WrapperText = styled.div`
  margin: 10px 0px 10vh 0px;

  width: 100%;
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;

  width: 100%;
  padding: 80px 0px 80px;

  > video {
    cursor: pointer;
    max-width: 935px;
    width: 100%;

    max-height: 475px;

    border: 0;
    fill: white;

    @media (max-width: 780px) {
      padding: 0px 20px;
    }
  }

  @media (max-width: 425px) {
    margin: 10px 0px 4px 0px;
  }

  > h3 {
    padding: 0 60px;
    font-size: 3.4em;
    color: var(--third);

    text-align: center;

    margin-bottom: 15px;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px 5px;
    }

    @media (max-width: 415px) {
      font-size: 4.4em;
    }

    @media (max-width: 350px) {
      font-size: 2.3em;
    }
  }

  > p:first-child {
    max-width: 1440px;
    font-size: 2.6em;
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }
  }

  > p {
    color: #888388;

    max-width: 1440px;
    font-size: 1.1em;
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 60px 20px;
    }
  }

  > a {
    max-width: 280px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    border-radius: 40px;

    font-size: 1.2em;
    font-weight: 500;
    color: var(--secondary);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: none;
    padding: 40px 60px;

    background: var(--fourth);
  }

  @media (max-width: 425px) {
    padding: 20px 0px 25px 0px;
    margin-top: 0px;
  }

  > iframe {
    width: 100%;
    height: 100%;

    max-width: 1240px;
    min-height: 519px;
  }
`;
