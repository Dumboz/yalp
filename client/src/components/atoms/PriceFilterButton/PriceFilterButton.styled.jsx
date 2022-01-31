import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Button = styled.button`
  background-color: ${({ isSelect }) =>
    isSelect ? getHexaColor('gray', 100) : 'white'};
  border: 1px solid ${({ isSelect }) => (isSelect ? '#1461a8' : '#5f5a5a')};
  color: ${({ isSelect }) => (isSelect ? '#1461a8' : 'black')};
`;
