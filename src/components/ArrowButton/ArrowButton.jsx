import styled from 'styled-components';
import { Icon } from 'components';
import { getSize, setMargin } from 'utils';
import { oneOf } from 'prop-types';

const Arrow = styled.button`
  border: none;
  width: ${getSize * 0.05}px;
  background-color: #fff;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    background-color: #fff;
    opacity: 0.2;
    border: 1px solid #d1cece;
  }
`;

export function ArrowButton({ type, size, isDisabled }) {
  console.log(isDisabled);
  return (
    <Arrow size={size} disabled={isDisabled}>
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
