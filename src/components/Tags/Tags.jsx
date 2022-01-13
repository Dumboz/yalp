import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getSize, setMargin } from 'utils';
import { getHexaColor } from 'styles/color';

const TagState = styled.button`
  background-color: ${getHexaColor('gray', 100)};
  color: ${getHexaColor('gray', 400)};
  font-size: ${getSize}px;
  font-weight: 600;
  padding-left: ${setMargin(0.2)}px;
  padding-right: ${setMargin(0.2)}px;
  border-radius: 3px;
  border: none;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: #b4b1b185;
    cursor: pointer;
  }
`;

export function Tags({ fontSize, children }) {
  return <TagState size={fontSize}>{children}</TagState>;
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
