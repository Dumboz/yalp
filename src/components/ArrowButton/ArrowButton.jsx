import { Icon } from 'components';
import { oneOf } from 'prop-types';
import { Arrow } from './ArrowButton.styled';

export function ArrowButton({ type, size, isDisabled }) {
  console.log(isDisabled);
  return (
    <Arrow size={size} disabled={isDisabled} aria-label='button'>
      <Icon type={type} size={size}></Icon>
    </Arrow>
  );
}
ArrowButton.propTypes = {
  type: oneOf(['leftarrow', 'rightarrow']),
};
ArrowButton.defaultProps = {
  type: 'rightarrow',
  size: 24,
  isDisabled: false,
};
