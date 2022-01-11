import React from 'react';
import { getHexaColor } from 'styles/color';

/*
    state: 'empty', 'full', 'half'
    color: 'gray', 'yellow', 'red', 'orange'
*/
const starImg = (state = 'empty', color = 'GRAY') => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="23"
        height="24"
        rx="3"
        fill={state === 'half' ? getHexaColor('gray') : getHexaColor(color)}
      />
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H12V24H3C1.34315 24 0 22.6569 0 21V3Z"
        fill={state === 'empty' ? getHexaColor('gray') : getHexaColor(color)}
      />
      <path
        d="M12 4L14.5863 8.44033L19.6085 9.52786L16.1846 13.3597L16.7023 18.4721L12 16.4L7.29772 18.4721L7.81535 13.3597L4.39155 9.52786L9.41374 8.44033L12 4Z"
        fill="#FFFEFE"
      />
    </svg>
  );
};

function Star({ state, color }) {
  return starImg(state, color);
}

export default Star;
