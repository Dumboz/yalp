import styled from 'styled-components';
import { getSize } from 'utils';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const LogoSVG = memo(styled.svg`
  width: ${getSize}px;
  height: ${({ size }) => size / 3}px;
`);

export const LinkWrapper = memo(styled(Link)`
  display: inline-block;
  position: absolute;
  left: ${({ left }) => left}px;
`);
