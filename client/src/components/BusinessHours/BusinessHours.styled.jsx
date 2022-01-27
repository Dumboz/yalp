import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import { getFontWeight } from 'utils';

export const TimeInfoList = styled.ul`
  padding: 0;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${getHexaColor('gray', 200)};
  font-size: 14px;
`;
export const TimeInfoItem = styled.li`
  /* font-weight: 600; */
  list-style: none;
  line-height: 24px;

  & > span {
    display: inline-block;
    padding-right: 16px;
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
      min-width: 46px;
      font-weight: ${getFontWeight};
    }

    &[data-open='Open'] {
      color: ${getHexaColor('green', 500)};
    }

    &[data-open='Closed'] {
      color: ${getHexaColor('primary', 500)};
    }
  }
`;
