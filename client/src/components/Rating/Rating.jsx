import Star from 'components/Star/Star';
import React from 'react';
import PropTypes from 'prop-types';
import { getHexaColor } from 'styles/color';
import { StarWrapper, Text, RatingItem } from './Rating.styled';
import { createStarsArray, range0to5 } from 'utils';

function Rating({ score, width, color, fontWeight, children }) {
  const stars = createStarsArray(score, width);

  return (
    <RatingItem>
      <StarWrapper>
        {stars.map(({ starType, step, width }, id) => (
          <li key={id}>
            <Star starType={starType} step={step} width={width} />
          </li>
        ))}
      </StarWrapper>
      <Text fontSize={(width / 3) * 2} color={color} fontWeight={fontWeight}>
        {children}
      </Text>
    </RatingItem>
  );
}

Rating.defaultProps = {
  score: 0,
  width: 23,
  color: getHexaColor('gray', 300),
  fontWeight: 500,
};

Rating.propTypes = {
  score: range0to5,
  width: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.string || PropTypes.number,
};

export default React.memo(Rating);
