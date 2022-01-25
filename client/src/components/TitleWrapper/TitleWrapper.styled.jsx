import styled from 'styled-components';
import { setTextAlign } from 'utils/styled/center';

export const Title = styled.h2`
  text-align: ${setTextAlign};
  font-size: ${({ size }) => size}px;
  line-height: 1.5;
  font-weight: 900;
  margin: ${({ margin }) => margin}px 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin: ${({ containerMargin }) => containerMargin}px;
  color: ${({ color }) => color};
`;
