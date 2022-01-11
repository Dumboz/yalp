import styled from 'styled-components';
import { useState } from 'react';

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

export function PriceFilterButton() {
  const newArr = Array(4).fill(false);
  const newColor = Array(4).fill('white');
  const [color, setColor] = useState([]);
  const [isButtonSelected, setButtonSelect] = useState([]);

  const onClickEvent = index => {
    console.log('a', isButtonSelected, 'b', index, 'c', newArr, color, 'a');
    if (newArr[index] === true) {
      newArr[index] = false;
      newColor[index] = 'white';
      setButtonSelect(newArr);
      setColor(newColor);
    } else {
      newArr[index] = true;
      newColor[index] = '#5a5c5f';
      setButtonSelect(newArr);
      setColor(newColor);
    }
  };

  return (
    <>
      <ButtonGroup aria-multiselectable='true' aria-required>
        {newArr.map((v, i) => {
          return (
            <button
              key={i + 1}
              type='button'
              role='switch'
              style={{ backgroundColor: color[i] }}
              aria-checked={isButtonSelected[i]}
              onClick={() => onClickEvent(i)}
            >
              {'$'.repeat(i + 1)}
            </button>
          );
        })}
        {/* <button
          key={index}
          type='button'
          role='switch'
          style={{ backgroundColor: color }}
          aria-checked={active}
          onClick={onClickEvent}
        >
          $
        </button> */}
        {/* <button
          type='button'
          role='switch'
          style={{ backgroundColor: color }}
          aria-checked={active}
          onClick={onClickEvent}
        >
          $$
        </button>
        <button
          type='button'
          role='switch'
          style={{ backgroundColor: color }}
          aria-checked={active}
          onClick={onClickEvent}
        >
          $$$
        </button>
        <button
          type='button'
          role='switch'
          style={{ backgroundColor: color }}
          aria-checked={active}
          onClick={onClickEvent}
        >
          $$$$
        </button> */}
      </ButtonGroup>
    </>
  );
}
