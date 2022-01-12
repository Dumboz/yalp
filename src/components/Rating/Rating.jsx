import Star from 'components/Star/Star';
import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

const StarWrapper = styled.ul`
  display: flex;
  & li {
    margin-right: 2px;
  }
`;

const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-left: 6px;
`;

const RatingItem = styled.div`
  display: flex;
  align-items: center;
`;

function Rating({
  score = 0,
  width = 23,
  color = getHexaColor('gray', 300),
  fontWeight = 500,
  children,
}) {
  let stars = useRef([]);

  const changeStars = useCallback(() => {
    let fullNum = Math.floor(score);
    let halfNum = Math.ceil(score) !== Math.floor(score) ? 1 : 0;

    const step = fullNum === 0 ? 100 : fullNum * 100;

    stars.current = Array.from({ length: 5 }, () => ({})).map(() => {
      if (fullNum-- > 0) {
        return { state: 'full', step, width };
      }
      if (halfNum-- > 0) {
        return { state: 'half', step, width };
      }
      return { state: 'empty', step, width };
    });
  }, [score, width]);

  changeStars();

  return (
    <RatingItem>
      <StarWrapper>
        {stars.current.map(({ state, step, width }, id) => (
          <li key={id}>
            <Star state={state} step={step} width={width} />
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
  score: range0to5.isRequired,
  width: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.string,
};

export default Rating;
