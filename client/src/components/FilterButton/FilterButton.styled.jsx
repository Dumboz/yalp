import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Button = styled.button`
  min-width: 109px;
  height: 50px;
  border: 1px solid ${getHexaColor('gray', 200)};
  border-radius: 30px;
  font-size: 20px;
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
