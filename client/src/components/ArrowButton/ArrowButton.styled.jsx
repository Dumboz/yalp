import { getSize } from 'utils';
import styled from 'styled-components';

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${getSize}px;
  height: ${getSize}px;
  background-color: #fff;
  border-radius: 50%;
  opacity: ${({ hover }) => (hover ? 1 : 0.6)};
  transition: 500ms ease-out;

  &:disabled {
    cursor: default;
    opacity: 0.2;
  }
`;
