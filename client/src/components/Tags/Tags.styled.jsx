import { getSize, setRatioSize } from 'utils';
import styled from 'styled-components';

export const TagState = styled.button`
  background-color: '#4C4C4D';
  color: '#DEDED';
  font-size: ${getSize}px;
  font-weight: 600;
  padding-left: ${setRatioSize(0.2)}px;
  padding-right: ${setRatioSize(0.2)}px;
  border-radius: 3px;
  border: none;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: #b4b1b185;
    cursor: pointer;
  }
`;
