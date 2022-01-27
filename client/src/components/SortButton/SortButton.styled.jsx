import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.button`
  border-radius: 20px;
  font-weight: 700;
  color: ${getHexaColor('gray', 500)};
  border: 1px solid ${getHexaColor('gray', 200)};
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:focus {
    background: ${getHexaColor('gray', 100)};
  }

  &.pressed {
    color: ${getHexaColor('blue', 500)};
    border: 1px solid ${getHexaColor('blue', 500)};
    background: ${getHexaColor('gray', 100)};
  }

  &.pressed use {
    fill: ${getHexaColor('blue', 500)};
  }

  & use {
    transform: translate(5%, 25%);
  }
`;

export const Modal = styled.menu`
  background-color: ${getHexaColor('white')};
  border-radius: 4px;
  box-shadow: 0 0 18px ${getHexaColor('gray', 500)};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: absolute;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

export const ModalItem = styled.button`
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  color: #2d2e2f;
  cursor: pointer;
  display: block;
  font: inherit;
  font-size: 100%;
  line-height: 1;
  padding: 0;
  text-align: left;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  white-space: nowrap;
  font-weight: 500;

  &:hover {
    background: ${getHexaColor('gray', 100)};
  }

  &.active {
    font-weight: 700;
  }
`;
