import styled from 'styled-components';
import { getSize, setRatioSize } from 'utils';

export const InlineList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const CommaLi = styled.li`
  font-size: ${getSize}px;
  margin-left: ${setRatioSize(0.5)}px;
  margin-right: ${setRatioSize(0.5)}px;
  line-height: '1.4';
`;
