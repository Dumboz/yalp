import Star from 'components/Star/Star';
import React from 'react';
import PropTypes from 'prop-types';
import { getHexaColor } from 'styles/color';
import { StarWrapper, Text, RatingItem } from './Rating.styled';

const createStarsArrsy = (score, width) => {
  let fullNum = Math.floor(score);
  let halfNum = Math.ceil(score) !== Math.floor(score) ? 1 : 0;

  const step = fullNum === 0 ? 100 : fullNum * 100;

  return Array.from({ length: 5 }, () => ({})).map(() => {
    if (fullNum-- > 0) {
      return { starType: 'full', step, width };
    }
    if (halfNum-- > 0) {
      return { starType: 'half', step, width };
    }
    return { starType: 'empty', step, width };
  });
};

function Rating({
  score = 0,
  width = 23,
  color = getHexaColor('gray', 300),
  fontWeight = 500,
  children,
}) {
  const stars = createStarsArrsy(score, width);

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

const range0to5 = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName] * 1;
    if (!isNaN(value)) {
      return value < 0 || value > 5
        ? new Error(propName + ' in ' + componentName + ' is not within 0 to 5')
        : null;
    } else {
      return new Error(propName + ' in ' + componentName + ' is not Number');
    }
  }
};

Rating.propTypes = {
  score: range0to5,
  width: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.string,
};

export default React.memo(Rating);
