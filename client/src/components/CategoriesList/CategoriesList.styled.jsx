import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const CategoriesUl = styled.ul`
  & > li:not(:first-child) {
    margin-left: 6px;
  }
`;

export const CategoriesItem = styled.li`
  display: inline-block;
  font-size: 12px;
  padding: 4px;
  line-height: 1;
  color: ${getHexaColor('gray', 400)};
  background-color: ${getHexaColor('gray', 100)};
  border-radius: 4px;
`;
