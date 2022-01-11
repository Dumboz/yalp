import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getHexaColor } from 'styles/color';

const buttonTypes = {
  default: {
    color: getHexaColor('gray', 500),
    background: getHexaColor('white', 100),
    hover: getHexaColor('gray', 200),
    border: '1px solid' + getHexaColor('gray', 200),
  },
  outline: {
    color: getHexaColor('gray', 300),
    background: getHexaColor('white', 100),
    hover: getHexaColor('white', 100),
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

const ButtonItem = styled.button`
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  color: ${({ prop }) => buttonTypes[prop].color};
  background: ${({ prop }) => buttonTypes[prop].background};
  border: ${({ prop }) => buttonTypes[prop].border};
  border-radius: ${({ borderFlatRadius }) => borderFlatType[borderFlatRadius]};

  justify-content: center;
  align-items: center;
  padding: ${({ contents }) => paddingValue[contents]};
`;

/*
  {
    prop: 'default', 'outline', 'highlight',
    constents: 'text', 'textIcon', 'icon',
    borderFlatRadius: 'none', 'top', 'left', 'right', 'bottom'
  }
*/
function Button({
  prop = 'default',
  contents = 'text',
  borderFlatRadius = 'none',
  children,
}) {
  return (
    <ButtonItem
      prop={prop}
      contents={contents}
      borderFlatRadius={borderFlatRadius}
    >
      {children}
    </ButtonItem>
  );
}

Button.prototype = {
  prop: PropTypes.string,
  contents: PropTypes.string,
  borderFlatRadius: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
