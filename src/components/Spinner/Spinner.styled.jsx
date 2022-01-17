import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .spinner {
    animation: rotate infinite 1s;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    stroke: ${getHexaColor('gray', 200)};
    stroke-width: 10;
  }

  & .path {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
