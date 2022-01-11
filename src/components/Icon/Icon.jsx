import styled from 'styled-components';
import { oneOf } from 'prop-types';

const SVG = styled.svg`
  width: ${({ size }) => size || 16}px;
  height: ${({ size }) => size || 16}px;
  flex: none;
`;

export function Icon({ type, size, color }) {
  return (
    <SVG size={size}>
      <use href={`#${type}`} fill={color} />
    </SVG>
  );
}
Icon.defaultProps = {
  type: 'fire',
  color: 'black',
};

Icon.propTypes = {
  type: oneOf([
    'calendar',
    'fire',
    'follower',
    'gallery',
    'pencil',
    'photo',
    'reviews',
    'save',
    'share',
    'search',
    'star',
    'talk',
  ]),
};
