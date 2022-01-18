import { Categories } from './Categories';

export default {
  title: 'Categories',
  component: Categories,
};

const Template = (args) => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Seafood',
};
