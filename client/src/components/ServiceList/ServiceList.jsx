import { makeArray } from 'utils';
import { ServiceListWrapper } from './ServiceList.styled';
export function ServiceList({ size, children }) {
  const services = makeArray(children);

  return (
    <ServiceListWrapper size={size}>
      {services.map((service) => service)}
    </ServiceListWrapper>
  );
}
