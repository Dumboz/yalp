import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getWidth, getHeight } from 'utils';
import { getHexaColor } from 'styles/color';

const TagState = styled.div`
  width: ${getWidth}px;
  height: ${getHeight}px;
  background-color: ${getHexaColor('gray', 400)};
  color: ${getHexaColor('gray', 200)};
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: ${getHexaColor('gray', 100)};
    cursor: pointer;
  }
`;

export function Tags({ width, height, content }) {
  return (
    <TagState width={width} height={height}>
      {content}
    </TagState>
  );
}

Tags.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  content: PropTypes.string.isRequired,
};

Tags.defaultTypes = {
  width: 20,
  height: 14,
  content: 'HIIII',
};
