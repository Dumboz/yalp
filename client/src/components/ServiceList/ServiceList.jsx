import { makeArray } from 'utils';
import { ServiceListWrapper } from './ServiceList.styled';
import { Service } from 'components/Service/Service';
export function ServiceList({ size, children }) {
  const services = makeArray(children);

  return (
    <ServiceListWrapper size={size}>
      {services.map((service) => (
        <Service key={service}>{service}</Service>
      ))}
    </ServiceListWrapper>
  );
}
