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
  name: 'group1',
  children: 'Has TV',
  checked: false,
};

export const RadioBox = Template.bind({});
RadioBox.args = {
  key: '1',
  type: 'radio',
  name: 'group1',
  children: 'Has TV',
  checked: false,
};
