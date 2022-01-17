import { Operation } from './Operation';

export default {
  title: 'Operation',
  component: Operation,
};

const Template = (args) => <Operation {...args} />;

export const Default = Template.bind({});
Default.args = {
  start: '1100',
  end: '2330',
  isOpenNow: true,
};
