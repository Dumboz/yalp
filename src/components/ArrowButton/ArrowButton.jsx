import { Icon } from 'components';
import { oneOf } from 'prop-types';
import { Arrow } from './ArrowButton.styled';

export function ArrowButton({ direct, size, disabled, hover }) {
  const iconType = (direct && 'right') + 'arrow';

  return (
    <Arrow size={size} disabled={disabled} hover={hover} aria-label="button">
      <Icon type={iconType} size={size * (3 / 4)}></Icon>
    </Arrow>
  );
}
ArrowButton.propTypes = {
  direct: oneOf(['left', 'right']),
};
ArrowButton.defaultProps = {
  direct: 'left',
  size: 24,
  disabled: false,
  hover: true,
};
