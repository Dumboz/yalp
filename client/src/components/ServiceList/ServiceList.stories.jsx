import { Service } from 'components/Service/Service';
import { ServiceList } from './ServiceList';

export default {
  title: 'ServiceList',
  component: ServiceList,
};

const Template = (args) => <ServiceList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Service isServe={true}>Outdoor dining</Service>,
    <Service isServe={false}>Delivery</Service>,
    <Service isServe={false}>Takeout</Service>,
  ],
};
