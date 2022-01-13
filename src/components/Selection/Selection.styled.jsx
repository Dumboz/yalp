import styled from 'styled-components';
import path from 'assets/filterIcon/check.svg';

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  width: 22px;
  height: 22px;
  border: 1px solid #c4c4c4;
  border-radius: ${({ type }) => (type === 'checkbox' ? '4px' : '50%')};
  background: ${({ checked, type }) =>
    type === 'checkbox' ? (checked ? '#357894' : '#FFFFFF') : '#FFFFFF'};
  display: inline-block;
  position: relative;

  &.active {
    border: 1px solid #357894;
  }

  &.active[type='checkbox']:before {
    content: '';
    display: inline-block;
    height: 22px;
    width: 22px;
    background: url(${path}) no-repeat center center;
    position: absolute;
  }

  &.active[type='radio']:before {
    content: '';
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #357894;
    position: absolute;
    transform: translate(24%, 23%);
  }
`;

export const List = styled.li`
  list-style: none;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
`;
