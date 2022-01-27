import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const LocationContainer = styled.div`
  width: 100%;
  margin: 28px auto;
  display: flex;

  & h4 {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 900;
    margin-bottom: 24px;
    letter-spacing: -0.4px;
    line-height: 28px;
  }
`;
export const LocationWrapper = styled.div`
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
  width: 420px;
  height: 200px;
  margin-bottom: 20px;
`;
