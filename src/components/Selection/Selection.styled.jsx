import styled from 'styled-components';
import path from 'assets/filterIcon/check.svg';

const getRatio = (number, ratio = 0.68) => Math.floor(number * ratio);

export const Input = styled.input`
  display: none;
  pointer-events: none;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  border: 1px solid #c4c4c4;
  width: ${({ boxSize }) => boxSize}px;
  height: ${({ boxSize }) => boxSize}px;
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ type }) => (type === 'checkbox' ? '4px' : '50%')};
  background: ${({ checked, type }) =>
    type === 'checkbox' ? (checked ? '#357894' : '#FFFFFF') : '#FFFFFF'};
  pointer-events: none;

  &.active {
    border: 1px solid #357894;
  }

  &.active[type='checkbox']:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: ${({ boxSize }) => boxSize}px;
    height: ${({ boxSize }) => boxSize}px;
    background: url(${path}) no-repeat center center;
  }

  &.active[type='radio']:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    background-color: #357894;
    transform: translate(24%, 23%);
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
