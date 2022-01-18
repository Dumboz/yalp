import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
  argTypes: {
    score: {
      control: {
        type: 'range',
        option: {
          min: 0,
          max: 5,
          step: 1,
        },
      },
    },
    width: {
      control: {
        type: 'range',
        option: {
          min: 16,
          max: 100,
          step: 1,
        },
      },
    },
    color: {
      control: 'color',
    },
    fontWeight: {
      type: 'range',
      option: {
        min: 100,
        max: 800,
        step: 100,
      },
    },
    children: {
      control: 'text',
    },
  },
};

const Template = args => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  score: 3,
  width: 24,
  color: '#C8C9CA',
  fontWeight: 500,
  children: '100 reviews ',
};
