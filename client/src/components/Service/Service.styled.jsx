import styled from 'styled-components';
import { setRatioSize } from 'utils';

export const ServiceWrapper = styled.span`
  display: flex;
  align-items: center;

  & > span {
    margin: 0;
    margin-left: ${setRatioSize(0.4)}px;
    font-size: ${setRatioSize(0.75)}px;
    font-weight: bold;
    line-height: 1.4;
  }
`;
