import React from 'react';
import styled from 'styled-components';
import { getSize, setRatioSize } from 'utils';

export const InlineList = React.memo(styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`);

export const CommaLi = React.memo(styled.li`
  color: ${({ color }) => color};
  font-size: ${getSize}px;
  margin-left: ${setRatioSize(0.5)}px;
  margin-right: ${setRatioSize(0.5)}px;
  line-height: '1.4';
`);
