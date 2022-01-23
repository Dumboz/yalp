import styled from 'styled-components';
import path from 'assets/filterIcon/check.svg';
import { getHexaColor } from 'styles/color';

const getRatio = (number, ratio = 0.68) => Math.floor(number * ratio);

export const Input = styled.input`
  display: none;
  pointer-events: none;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  border: 1px solid ${getHexaColor('gray', 200)};
  width: ${({ boxSize }) => boxSize}px;
  height: ${({ boxSize }) => boxSize}px;
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ type }) => (type === 'checkbox' ? '4px' : '50%')};
  background: ${getHexaColor('white')};
  pointer-events: none;

  &.active[type='checkbox'] {
    border: 1px solid ${getHexaColor('blue', 500)};
    background: ${getHexaColor('blue', 500)};
  }

  &.active[type='checkbox']:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${path}) no-repeat center center;
  }

  &.active[type='radio']:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    background-color: #357894;
    transform: translate(22%, 22%);
    height: ${({ boxSize }) => getRatio(boxSize)}px;
    width: ${({ boxSize }) => getRatio(boxSize)}px;
  }
`;

export const List = styled.div`
  gap: 5px;
  width: 100%;
  display: flex;
  flex-flow: row;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
`;

export const Span = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  pointer-events: none;
`;
