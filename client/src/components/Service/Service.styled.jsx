import styled from 'styled-components';
import { setRatioSize } from 'utils';

export const ServiceWrapper = styled.li`
  display: flex;
  align-items: center;

  & > span {
    margin: 0;
    margin-left: ${setRatioSize(0.4)}px;
    line-height: 1.4;
  }
`;
