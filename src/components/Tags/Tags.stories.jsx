import { Tags } from './Tags';

export default {
  title: 'Tags',
  component: Tags,
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
    <InitSVG />
  </>
);

export const Calendar = Template.bind({});
Calendar.args = {
  type: 'calendar',
};

export const Fire = Template.bind({});
Fire.args = {
  type: 'fire',
};
export const Follower = Template.bind({});
Follower.args = {
  type: 'follower',
};
export const Gallery = Template.bind({});
Gallery.args = {
  type: 'gallery',
};
export const Pencil = Template.bind({});
Pencil.args = {
  type: 'pencil',
};
export const Photo = Template.bind({});
Photo.args = {
  type: 'photo',
};
export const Reviews = Template.bind({});
Reviews.args = {
  type: 'reviews',
};
export const Save = Template.bind({});
Save.args = {
  type: 'save',
};
export const Search = Template.bind({});
Search.args = {
  type: 'search',
};
export const Share = Template.bind({});
Share.args = {
  type: 'share',
};
export const Star = Template.bind({});
Star.args = {
  type: 'star',
};
export const Talk = Template.bind({});
Talk.args = {
  type: 'talk',
};
