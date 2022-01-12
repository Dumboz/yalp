import { Icon } from './Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'number',
        options: {
          min: 16,
          max: 100,
          step: 1,
        },
      },
    },
  },
};

const Template = args => (
  <>
    <Icon {...args} />
  </>
);

export const Calendar = Template.bind({});
Calendar.args = {
  type: 'calendar',
};
