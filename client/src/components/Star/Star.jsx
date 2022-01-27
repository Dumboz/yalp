import React from 'react';
import PropTypes from 'prop-types';
import { getHexaColor } from 'styles/color';

function Star({ starType, step, width }) {
  return (
    <svg
      width={width}
      height={(24 / 23) * width}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="23"
        height="24"
        rx="3"
        fill={
          starType === 'half' || starType === 'empty'
            ? getHexaColor('gray', 200)
            : getHexaColor('primary', step)
        }
      />
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H12V24H3C1.34315 24 0 22.6569 0 21V3Z"
        fill={
          starType === 'empty'
            ? getHexaColor('gray', 200)
            : getHexaColor('primary', step)
        }
      />
      <path
        d="M12 4L14.5863 8.44033L19.6085 9.52786L16.1846 13.3597L16.7023 18.4721L12 16.4L7.29772 18.4721L7.81535 13.3597L4.39155 9.52786L9.41374 8.44033L12 4Z"
        fill="#FFFEFE"
      />
    </svg>
  );
}

Star.defaultProps = {
  starType: 'empty',
  step: 500,
  width: 23,
};

Star.propTypes = {
  starType: PropTypes.oneOf(['empty', 'full', 'half']).isRequired,
  step: PropTypes.number || PropTypes.string,
  width: PropTypes.number,
};

export default React.memo(Star);
