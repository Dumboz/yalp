import Star from './Star';

export default {
  title: 'Star',
  component: Star,
  argTypes: {
    starType: {
      control: {
        type: 'select',
        options: ['empty', 'full', 'half'],
      },
    },
    step: {
      control: {
        type: 'select',
        options: [100, 200, 300, 400, 500],
      },
    },
    width: {
      control: 'range',
      options: {
        min: 16,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = args => (
  <>
    <Star {...args} />
  </>
);

export const Empty = Template.bind({});
Empty.args = {
  starType: 'empty',
  step: 500,
  width: 23,
};

export const Half = Template.bind({});
Half.args = {
  ...Empty.args,
  starType: 'half',
};

export const Full = Template.bind({});
Full.args = {
  ...Empty.args,
  starType: 'full',
};
