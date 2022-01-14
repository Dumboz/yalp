import { TagState } from './Tags.styled';
import { PropTypes } from 'prop-types';

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
