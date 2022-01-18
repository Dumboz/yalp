import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const CardLink = styled.a`
  display: inline-block;
  width: 300px;
`;

export const Figure = styled.figure`
  border: 1px solid ${getHexaColor('gray', 100)};
  border-radius: 4px;
  width: 100%;
  overflow: hidden;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 180px;
  }

  & > figcaption {
    background-color: white;

    & > h3 {
      font-weight: 700;
      color: ${getHexaColor('blue', 600)};
    }

    padding: 14px;
    & > * {
      margin-bottom: 2px;

      &:not(h3) {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  & span {
    display: block;
  }
`;
