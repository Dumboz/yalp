import { FilterList } from './FilterList';

export default {
  title: 'FilterList',
  component: FilterList,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['checkbox', 'radio'],
      },
    },
  },
};

const Template = (args) => <FilterList {...args} />;

export const List = Template.bind({});
List.args = {
  type: 'checkbox',
  heading: 'option title',
  options: ['options1', 'options2', 'options3', 'options4'],
};
