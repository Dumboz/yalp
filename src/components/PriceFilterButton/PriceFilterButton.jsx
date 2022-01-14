import styled from 'styled-components';
import { useState } from 'react';

const Button = styled.button`
  background-color: ${({ isSelect }) => (isSelect ? '#c7c5c5' : 'white')};
  border: 1px solid ${({ isSelect }) => (isSelect ? '#1461a8' : '#5f5a5a')};
  color: ${({ isSelect }) => (isSelect ? '#1461a8' : 'black')};
`;

export function PriceFilterButton({ isSelect, onClick, children }) {
  return (
    <Button
      isSelect={isSelect}
      onClick={onClick}
      type='button'
      role='switch'
      aria-checked={isSelect}
    >
      {children}
    </Button>
  );
}

// const newArr = Array(4).fill(false);
// const newColor = Array(4).fill('white');
// const [color, setColor] = useState([]);
// const [isButtonSelected, setButtonSelect] = useState([false, false, false, false]);
// const onClickEvent = index => {
//   if (newArr[index] === true) {
//     newArr[index] = false;
//     newColor[index] = 'white';
//     setButtonSelect(newArr);
//     setColor(newColor);
//   } else {
//     newArr[index] = true;
//     newColor[index] = 'hsla(216.52173913043478, 64.78873239436619%, 72.15686274509804%, 0.726)';
//     setButtonSelect(newArr);
//     setColor(newColor);
//   }
// };
// return (
//   <>
//     <ButtonGroup aria-multiselectable='true' aria-required>
//       {isButtonSelected.map((v, i) => {
//         return (
//           <button
//             key={i + 1}
//             isSelect={v}
//             type='button'
//             role='switch'
//             aria-checked={v[i]}
//             style={{ backgroundColor: color[i] }}
//             onClick={() => onClickEvent(i)}
//           >
//             {'$'.repeat(i + 1)}
//           </button>
//         );
//       })}
//     </ButtonGroup>
//   </>
// );
