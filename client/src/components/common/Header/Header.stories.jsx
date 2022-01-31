import Header from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    searchWord: {
      control: 'text',
    },
    locationWord: {
      control: 'text',
    },
  },
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchWord: `tacos, Cheap Dinner, Max's`,
  locationWord: 'New York',
};
