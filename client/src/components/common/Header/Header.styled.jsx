import { memo } from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const HeaderWrapper = memo(styled.div`
  width: 100%;
  height: 130px;
  padding: 16px;
  padding-left: 150px;
  background-color: ${getHexaColor('white')};
  position: sticky;
  z-index: 1000;
  top: 0;
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`);
