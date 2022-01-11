import { oneOf } from 'prop-types';

export function Icon({ type }) {
  return (
    <svg>
      <use href={`#${type}`} />
    </svg>
  );
  // return <img src={require(`assets/icon/Icon=${type}.svg`)} alt={type} />;
}
Icon.defaultProps = {
  type: 'fire',
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
