import styled from 'styled-components';
const getSize = ({ size }) => size;
const setMargin =
  (ratio) =>
  ({ size }) =>
    Math.floor(size * ratio);

export const Description = styled.div`
  display: flex;
  align-items: top;

  & > svg {
    margin-top: ${setMargin(0.2)}px;
    margin-bottom: ${setMargin(0.2)}px;
  }

  & > p {
    margin: 0;
    margin-left: ${setMargin(0.25)}px;
    display: inline-block;
    font-size: ${getSize}px;
    line-height: 1.4;
  }
`;
