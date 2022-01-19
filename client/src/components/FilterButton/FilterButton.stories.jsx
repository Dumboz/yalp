import { FilterButton } from './FilterButton';

export default {
  title: 'FilterButton',
  component: FilterButton,
};

const Template = (args) => <FilterButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Open Now',
  height: 30,
};

export const SecondTemplate = (args) => <FilterButton.DropDown {...args} />;
SecondTemplate.args = {
  children: 'Price',
  height: 30,
};
