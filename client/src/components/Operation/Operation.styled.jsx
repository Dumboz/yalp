import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import { getSize } from 'utils';
export const OperationWrapper = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-size: ${getSize}px;
  }
`;
export const OpenInfo = styled.span`
  color: ${({ isOpen }) =>
    isOpen ? getHexaColor('green', 500) : getHexaColor('primary', 500)};
`;

export const TimeInfo = styled.span`
  margin-left: 6px;
`;
