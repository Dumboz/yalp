import { Icon } from './Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'calendar',
          'fire',
          'follower',
          'gallery',
          'pencil',
          'photo',
          'reviews',
          'save',
          'search',
          'share',
          'star',
          'talk',
        ],
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
