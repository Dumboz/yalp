import styled from 'styled-components';
import { getSize } from 'utils';
import { memo } from 'react';

export const SVG = memo(styled.svg`
  width: ${getSize}px;
  height: ${getSize}px;
  flex: none;
`);
