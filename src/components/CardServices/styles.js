import styled from "styled-components";

export const Card = styled.div`
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
    font-size: 1em;

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
    font-size: 1.2em;
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
