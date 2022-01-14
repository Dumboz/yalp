import { Tags } from './Tags';

export default {
  title: 'Tags',
  component: Tags,
  argTypes: {
    width: {
      control: {
        type: 'number',
        options: {
          min: 15,
          max: 150,
          step: 1,
        },
      },
    },
    height: {
      control: {
        type: 'number',
        options: {
          min: 15,
          max: 100,
          step: 1,
        },
      },
    },
    content: {
      control: {
        type: 'string',
      },
    },
  },
};

const Template = args => (
  <>
    <Tags {...args} />
  </>
);

// export const Tags = Template.bind({});
// Tags.args = {
//   type: 'tags',
// };
