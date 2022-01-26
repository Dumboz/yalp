import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const List = styled.ul`
  display: inline-flex;
  flex-flow: column;
  gap: 15px;
  padding-left: 15px;
  position: sticky;
  top: 130px;
  align-self: flex-start;

  & li:first-child {
    border: 0;
  }
`;

export const ListItem = styled.li`
  padding-top: 15px;
  border-top: 1px solid ${getHexaColor('gray', 100)};
  width: 100%;
`;
