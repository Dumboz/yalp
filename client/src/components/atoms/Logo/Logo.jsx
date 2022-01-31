import { memo } from 'react';
import { A11yHidden } from 'components';
import { LogoSVG, LinkWrapper } from './Logo.styled';

function Logo({ type, size, left }) {
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
  left: 30,
};

export default memo(Logo);
