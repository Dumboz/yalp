import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  gap: 5px;
`;

export const Heading = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;

export const List = styled.ul`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-flow: column;
  gap: 3px;
`;

export const Button = styled.button`
  color: ${getHexaColor('blue', 500)};
  font-size: 500;
  text-align: left;
  border: 0;
  padding: 0;
  padding-top: 10px;
  font-size: 16px;
`;
