import { Selection } from './Selection';

export default {
  title: 'Selction',
  component: Selection,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['checkbox', 'radio'],
      },
    },
    checked: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
};

const Template = (args) => <Selection {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
  key: '0',
  type: 'checkbox',
  group: 'group1',
  children: 'Has TV',
  checked: false,
  fontSize: 16,
  boxSize: 22,
};
