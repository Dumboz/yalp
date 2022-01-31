import React from 'react';
import styled from 'styled-components';
import { getSize, setRatioSize, getColor } from 'utils';

export const Description = React.memo(styled.div`
  display: flex;
  align-items: top;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-right: ${({ marginRight }) => marginRight}px;
  & > svg {
    margin-top: ${setRatioSize(0.2)}px;
    margin-bottom: ${setRatioSize(0.2)}px;
    margin-right: ${setRatioSize(0.5)}px;
  }

  & > p,
  & > span {
    margin: 0;
    display: inline-block;
    font-size: ${getSize}px;
    line-height: 1.4;
    color: ${getColor};
  }
`);
