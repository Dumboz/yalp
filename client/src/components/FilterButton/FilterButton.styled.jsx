import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

const RATIO_TO_HEIGHT = 2.2;

export const Button = styled.button`
  width: auto;
  min-width: ${({ height }) => height * RATIO_TO_HEIGHT}px;
  height: ${({ height }) => height}px;
  border: 1px solid ${getHexaColor('gray', 200)};
  border-radius: 30px;
  font-size: ${({ fontSize }) => fontSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  gap: 8px;

  & .spinner.active {
    display: block;
  }

  & .spinner {
    display: none;
  }
`;
