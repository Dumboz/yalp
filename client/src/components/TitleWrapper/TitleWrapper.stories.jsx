import { TitleWrapper } from './TitleWrapper';

export default {
  title: 'TitleWrapper',
  component: TitleWrapper,
  argTypes: {
    size: {
      control: 'range',
    },
    margin: {
      control: 'range',
    },
  },
};

const Template = args => <TitleWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'This is Title',
  center: true,
  children: 'huihihiihih',
};
