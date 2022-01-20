import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const List = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

export const ListItem = styled.li`
  padding-top: 15px;
  border-top: 1px solid ${getHexaColor('gray', 100)};
  width: 40%;
`;
