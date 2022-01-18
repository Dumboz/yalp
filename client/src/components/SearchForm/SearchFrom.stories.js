import SearchForm from './SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
  argTypes: {
    showLabel: {
      control: 'boolean',
    },
    hasShadow: {
      control: 'boolean',
    },
    searchWord: {
      control: 'text',
    },
    locationWord: {
      control: 'text',
    },
  },
};

const Template = args => <SearchForm {...args} />;

export const SearchForm1 = Template.bind({});
SearchForm1.args = {
  showLabel: true,
  hasShadow: false,
  searchWord: 'hambuger',
  locationWord: 'New York',
};

export const SearchForm2 = Template.bind({});
SearchForm2.args = {
  ...SearchForm1.args,
  showLabel: false,
  hasShadow: true,
};
