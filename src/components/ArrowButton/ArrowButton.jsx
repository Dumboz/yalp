import styled from 'styled-components';
import { Icon } from 'components';
import { getSize } from 'utils';
import { oneOf } from 'prop-types';

const Arrow = styled.div`
  border: none;
  width: ${getSize}px;
  background-color: #e7e1e1;
  opacity: 0.3;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export function ArrowButton({ type, size }) {
  return (
    <Arrow size={size}>
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
};
