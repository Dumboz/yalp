import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const ButtonGroup = styled.ul`
  display: flex;
  width: 200px;
  & > button {
    color: ${getHexaColor('gray', 500)};
    font-size: 12px;
    font-weight: 700;
    flex-basis: 50px;
    padding: 6px;
    box-sizing: border-box;
    border: 1px solid ${getHexaColor('gray', 200)};
    border-right: none;
    transition: background-color 0.3s;
  }
  & > button:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & > button:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-right: 1px solid ${getHexaColor('gray', 200)};
  }
  & > button:hover {
    background: ${getHexaColor('gray', 100)};
    transition: 0.3s;
  }
`;
