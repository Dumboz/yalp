import styled, { css } from 'styled-components';
import { getHexaColor } from 'styles/color';
import React from 'react';

export const Label = React.memo(styled.label`
  position: relative;
  color: ${() => getHexaColor('gray', 400)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width + 'px'};

  font-weight: 800;
  font-size: 20px;
  padding: 11px;
  background-color: ${() => getHexaColor('white', 100)};

  &::after {
    ${({ divider }) =>
      divider &&
      css`
        content: '';
        display: inline-block;
        width: 1px;
        height: 30px;
        background-color: ${() => getHexaColor('gray', 300)};
      `}
  }
`);

export const Text = React.memo(styled.span`
  margin-right: 12px;
  display: inline-block;
  height: 100%;
`);

export const Input = React.memo(styled.input.attrs((props) => ({
  type: 'text',
  ...props,
}))`
  width: 100%;
  border: none;
  height: 100%;
  font-size: 20px;
`);

export const Form = React.memo(styled.form`
  display: flex;
  justify-content: stretch;
  max-width: 1000px;
  margin: 10px;
  border-radius: 4px;
  overflow: hidden;

  ${({ hasShadow }) =>
    hasShadow &&
    css`
      box-shadow: 0 2px 18px #00000026;
    `};

  & > button {
    flex-grow: 1;
  }
`);
