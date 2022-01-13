import { getSize, setRatioSize } from 'utils';
import { getHexaColor } from 'styles/color';
import styled from 'styled-components';

export const TagState = styled.button`
  background-color: ${getHexaColor('gray', 100)};
  color: ${getHexaColor('gray', 400)};
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
