import { Icon } from 'components/Icon/Icon';
import { ServiceWrapper } from './Service.styled';
import { string } from 'prop-types';

export function Service({ isServe, size, children }) {
  const iconType = isServe ? 'done' : 'none';

  return (
    <ServiceWrapper size={size}>
      <Icon type={iconType} size={size} />
      <span>{children}</span>
    </ServiceWrapper>
  );
}

Service.defaultProps = {
  size: 16,
};

Service.propTypes = {
  children: string,
};
