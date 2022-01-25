import React from 'react';
import styled, { css } from 'styled-components';
import { getHexaColor } from 'styles/color';

export const ContentWrapper = React.memo(styled.div`
  max-width: 360px;
  height: 100%;
  padding: 24px;
`);

export const PhotoWrapper = React.memo(styled.div`
  background-color: #000;
  position: relative;
  width: 100%;
`);

export const ModalInnder = React.memo(styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`);

export const PhotoList = React.memo(styled.ul`
  width: 100%;
  display: grid;
  grid-template-areas: '. .';
  min-height: 80%;
  max-height: 500px;
  overflow-y: auto;

  & > li {
    padding: 0 4px;
    margin-top: 8px;
  }
`);

export const PhotoPriview = React.memo(styled.img`
  aspect-ratio: 1.8;
  border-radius: 5px;
  object-fit: cover;
  box-sizing: border-box;
  ${({ isSelect }) =>
    isSelect
      ? css`
          border: 2px solid black;
        `
      : css`
          opacity: 0.4;
          filter: alpha(opacity=40);
        `};
`);

export const Text = React.memo(styled.span`
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  color: ${getHexaColor('gray', 400)};
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
`);

export const PhotoButton = React.memo(styled.button`
  border: 0;
  padding: 0;
  margin: 0;
`);

export const Photo = React.memo(styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`);

export const ArrowButtonWrapper = React.memo(styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`);
