import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { getSize } from 'utils';

const SVG = styled.svg`
  width: ${getSize}px;
  height: ${getSize}px;
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
  size: 16,
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
    'search',
    'share',
    'fillstar',
    'leftarrow',
    'rightarrow',
    'star',
    'talk',
    'dropdown',
    'done',
    'loading',
    'close',
    'claimed',
  ]),
};
