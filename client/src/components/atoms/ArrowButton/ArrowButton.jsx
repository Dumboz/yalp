import { Icon } from 'components';
import { oneOf } from 'prop-types';
import { Arrow } from './ArrowButton.styled';
import { memo } from 'react';

function ArrowButton({ direct, size, disabled, hover, onClick }) {
  const iconType = direct + 'arrow';

  return (
    <Arrow
      size={size}
      disabled={disabled}
      hover={hover}
      aria-label="button"
      onClick={onClick}
    >
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

export default memo(ArrowButton);
