import styled from 'styled-components';
import { getSize, setRatioSize, getColor } from 'utils';
import { getHexaColor } from 'styles/color';

export const Description = styled.div`
  display: flex;
  align-items: top;
  color: ${getHexaColor('gray', 500)};

  & > svg {
    margin-top: ${setRatioSize(0.2)}px;
    margin-bottom: ${setRatioSize(0.2)}px;
    margin-right: ${setRatioSize(0.25)}px;
  }

  & > p {
    margin: 0;
    display: inline-block;
    font-size: ${getSize}px;
    line-height: 1.4;
    color: ${getColor};
  }
`;
