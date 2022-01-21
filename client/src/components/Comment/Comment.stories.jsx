import { Comment } from './Comment';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'Comment',
  component: Comment,
  argTypes: {
    iconType: {
      control: {
        type: 'select',
        options: [
          '',
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
          'fillstar',
          'leftarrow',
          'rightarrow',
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

const Template = (args) => (
  <>
    <Comment {...args} />
    <InitSVG />
  </>
);

export const Default = Template.bind({});
Default.args = {
  iconType: 'fire',
  title: '캘린더',
  size: 32,
  children: `I dream about this place. And I'm a very picky pizza eater. Super saucy,
  fresh, thick, perfectly greasy, hot, yum, yum. Plus the employees are
  totally great and looking out for the hihihihihihihihihihihihi`,
};
