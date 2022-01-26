import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const LocationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 28px 0;
  border-top: 1px solid ${getHexaColor('gray', 300)};
  border-bottom: 1px solid ${getHexaColor('gray', 300)};

  & h4 {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 900;
    margin-bottom: 20px;
    letter-spacing: -0.4px;
    line-height: 28px;
  }
`;
export const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & img {
    margin-bottom: 20px;
  }

  & figcaption p {
    font-size: 14px;

    &:first-child {
      color: ${getHexaColor('blue', 500)};
    }
    &:nth-child(2) {
      font-weight: bold;
    }
  }
`;

export const Img = styled.img`
  width: 315px;
  height: 150px;
`;
