import { FilterList } from './FilterList';

export default {
  title: 'FilterList',
  component: FilterList,
};

const Template = (args) => <FilterList {...args} />;

export const List = Template.bind({});
List.args = {
  heading: 'Option Title',
  options: ['options1', 'options2', 'options3', 'options4'],
};
