import styled from 'styled-components';
import { setRatioSize } from 'utils';

export const ServiceListWrapper = styled.ul`
  display: flex;
  padding-top: 1rem;
  margin-top: 16px;
  border-top: 1px solid black;
  & > li {
    font-size: ${setRatioSize(12 / 14)}px;
  }

  & > li:not(:first-child) {
    margin-left: 10px;
  }
`;
