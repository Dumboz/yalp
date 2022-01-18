import { Service } from './Service';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'Service',
  component: Service,
};

const Template = (args) => (
  <>
    <Service {...args} />
    <InitSVG />
  </>
);

export const Default = Template.bind({});
Default.args = {
  isServe: true,
  children: 'Outdoor dining',
};

export const notServe = Template.bind({});
notServe.args = {
  isServe: false,
  size: 40,
  children: 'Delivery',
};
