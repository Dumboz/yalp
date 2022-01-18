import { array } from 'prop-types';
import { FilterButton } from './FilterButton';

export default {
  title: 'FilterButton',
  component: FilterButton,
};

const Template = (args) => <FilterButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Price',
  height: 25,
  fontSize: 15,
};
