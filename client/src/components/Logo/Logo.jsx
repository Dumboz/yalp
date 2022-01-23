import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getSize } from 'utils';

const LogoSVG = styled.svg`
  width: ${getSize}px;
  height: ${({ size }) => size / 3}px;
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  position: absolute;
  left: ${({ left }) => left}px;
`;

export function Logo({ type, size, left = 30 }) {
  return (
    <LinkWrapper to="/" size={size} left={left}>
      <A11yHidden>Yalp</A11yHidden>
      <LogoSVG size={size}>
        <use href={`#${type}`} />
      </LogoSVG>
    </LinkWrapper>
  );
}
Logo.defaultProps = {
  type: 'logo',
  size: 200,
};
