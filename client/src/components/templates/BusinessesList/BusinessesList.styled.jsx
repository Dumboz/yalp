import { memo } from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Message = memo(styled.div`
  margin-top: 60px;
  color: ${getHexaColor('gray', 400)};
`);

export const BusinessesUl = memo(styled.ul`
  flex: 0.44758 0 779px;
`);

export const LoadingSpinner = memo(styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`);
