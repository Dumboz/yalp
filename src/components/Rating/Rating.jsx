import Star from 'components/Star/Star';
import React from 'react';
import PropTypes from 'prop-types';

function Rating({ score = 0 }) {
  let fullNum = Math.floor(score);
  let halfNum = Math.ceil(score) !== Math.floor(score) ? 1 : 0;
  const step = fullNum * 100;

  const stars = Array.from({ length: 5 }, () => ({})).map(() => {
    if (fullNum-- > 0) {
      return { state: 'full', step };
    }
    if (halfNum-- > 0) {
      return { state: 'half', step };
    }
    return { state: 'empty', step };
  });

  return (
    <>
      {stars.map(({ state, step }, id) => (
        <Star state={state} step={step} key={id} />
      ))}
    </>
  );
}

Rating.propTypes = {
  score: PropTypes.number,
};

export default Rating;
