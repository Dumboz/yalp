import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const OpenInfo = styled.span`
  font-weight: 600;
  color: ${({ isOpen }) =>
    isOpen ? getHexaColor('green', 500) : getHexaColor('primary', 500)};
`;

export const TimeInfo = styled.span`
  font-weight: 600;
`;
