import { Icon } from 'components';
import { memo } from 'react';
import { ServiceWrapper } from './Service.styled';

function Service({ isServe, size, children }) {
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

export default memo(Service)