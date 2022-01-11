import styled, { css } from 'styled-components';

export function PriceFilterButton() {
  const ButtonGroup = styled.div`
    & > button {
      border: 1px solid black;
      border-right: none;
    }
    & > button:first-child {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }
    & > button:last-child {
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border-right: 1px solid black;
    }
  `;
  return (
    <>
      <ButtonGroup>
        <button type='button'>$</button>
        <button type='button'>$$</button>
        <button type='button'>$$$</button>
        <button type='button'>$$$$</button>
      </ButtonGroup>
    </>
  );
}
