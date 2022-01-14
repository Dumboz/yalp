import styled from 'styled-components';

export const ButtonGroup = styled.ul`
  & > button {
    border: 1px solid black;
    border-right: none;
  }
  & > button:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & > button:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-right: 1px solid black;
  }
  & > button:hover {
    background-color: #c7c5c5;
  }
`;
