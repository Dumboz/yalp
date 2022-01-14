import { getSize } from 'utils';
import styled from 'styled-components';

export const Arrow = styled.button`
  border: none;
  width: ${getSize}px;
  background-color: #fff;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    background-color: #fff;
    opacity: 0.2;
    border: 1px solid #d1cece;
  }
`;
