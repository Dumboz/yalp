import { Icon } from 'components/Icon/Icon';
import { ServiceWrapper } from './Service.styled';

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
  isServe: true,
  size: 16,
};
