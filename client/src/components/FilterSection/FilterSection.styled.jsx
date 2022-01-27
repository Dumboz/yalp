import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const List = styled.ul`
  display: inline-flex;
  position: sticky;
  align-self: flex-start;
  top: 130px;
  flex-flow: column;
  gap: 15px;
  padding-left: 15px;
  position: sticky;
  top: 130px;
  align-self: flex-start;
  margin-bottom: 200px;

  & li:first-child {
    border: 0;
  }
`;

export const ListItem = styled.li`
  padding-top: 15px;
  border-top: 1px solid ${getHexaColor('gray', 100)};
  width: 100%;
`;
