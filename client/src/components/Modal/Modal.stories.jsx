import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    visible: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: 'text',
    },
  },
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  children: 'This is Modal',
};
