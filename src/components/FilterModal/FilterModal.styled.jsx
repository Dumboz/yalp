import styled from 'styled-components';

import { getHexaColor } from 'styles/color';

export const Form = styled.form`
  width: 172px;
  padding: 16px;
  font-weight: 600;
  border-radius: 4px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  text-align: left;
  font-weight: 600;
  box-sizing: border-box;
  color: ${getHexaColor('blue', 500)};
  font-size: ${({ fontSize }) => fontSize}px;
  background-color: ${getHexaColor('white')};

  &:hover {
    border-radius: 4px;
    background-color: ${getHexaColor('gray', 100)};
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  padding-bottom: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 8px;
  list-style: none;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    background-color: ${getHexaColor('gray', 100)};
  }
`;
