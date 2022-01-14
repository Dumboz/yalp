import React from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const buttonStyle = {
  default: {
    color: getHexaColor('gray', 500),
    background: getHexaColor('white', 100),
    hover: getHexaColor('gray', 100),
    border: '1px solid' + getHexaColor('gray', 200),
  },
  outline: {
    color: getHexaColor('gray', 300),
    background: getHexaColor('white', 100),
    hover: getHexaColor('gray', 100),
    border: '1px solid' + getHexaColor('gray', 200),
  },
  highlight: {
    color: getHexaColor('white', 100),
    background: getHexaColor('red', 400),
    hover: getHexaColor('red', 300),
    border: null,
  },
};

const paddingValue = {
  text: '8px 16px',
  icon: '12px 16px',
  textIcon: '6px 16px',
};

const borderFlatType = {
  none: '4px',
  top: '0px 0px 4px 4px',
  left: '0px 4px 4px 0px',
  right: '4px 0px 0px 4px',
  bottom: '4px 4px 0px 0px',
};

export const ButtonItem = React.memo(styled.button`
  border: none;
  cursor: pointer;

  color: ${({ buttonType }) => buttonStyle[buttonType].color};
  background: ${({ buttonType }) => buttonStyle[buttonType].background};
  border: ${({ buttonType }) => buttonStyle[buttonType].border};
  border-radius: ${({ flatBorderSide }) => borderFlatType[flatBorderSide]};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ contents }) => paddingValue[contents]};

  transition: background-color 0.4s ease;

  &:hover {
    background: ${({ buttonType }) => buttonStyle[buttonType].hover};
  }
`);
