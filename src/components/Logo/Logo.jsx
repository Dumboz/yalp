import styled from 'styled-components';
import { getSize } from 'utils';

const LogoSVG = styled.svg`
  width: ${getSize}px;
`;

export function Logo({ type, size }) {
  return (
    <LogoSVG size={size}>
      <use href={`#${type}`} />
    </LogoSVG>
  );
}
Logo.defaultProps = {
  size: 190,
};
