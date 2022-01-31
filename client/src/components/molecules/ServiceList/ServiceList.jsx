import { makeArray } from 'utils';
import { ServiceListWrapper } from './ServiceList.styled';
import { Service } from 'components';
import { memo } from 'react';

function ServiceList({ size, children }) {
  const services = makeArray(children);

  return (
    <ServiceListWrapper size={size}>
      {services.map((service) => (
        <Service key={service}>{service}</Service>
      ))}
    </ServiceListWrapper>
  );
}

export default memo(ServiceList);
