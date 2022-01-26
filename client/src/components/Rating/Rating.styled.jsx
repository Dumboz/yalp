import React from 'react';
import styled from 'styled-components';

export const StarWrapper = React.memo(styled.ul`
  display: flex;
  & li {
    margin-right: 2px;
    line-height: 0;
  }
`);

export const Text = React.memo(styled.p`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-left: 6px;
`);

export const RatingItem = React.memo(styled.div`
  display: flex;
  align-items: center;
`);
