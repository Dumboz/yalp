import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const ButtonGroup = styled.ul`
  display: flex;
  width: 200px;
  & > button {
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

export const Button = styled.button`
  background-color: ${({ isSelect }) => (isSelect ? '#c7c5c5' : 'white')};
  border: 1px solid ${({ isSelect }) => (isSelect ? '#1461a8' : '#5f5a5a')};
  color: ${({ isSelect }) => (isSelect ? '#1461a8' : 'black')};
`;
