import Button from './Button';
import { InitSVG } from 'components/templates/InitSVG/InitSVG';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        option: ['default', 'highlight', 'outline'],
      },
    },
    href: {
      control: 'text',
    },
    as: {
      control: { type: 'select', option: ['a', 'button'] },
    },
    iconType: {
      control: {
        type: 'select',
        options: [
          null,
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
    flatBorderSide: {
      control: {
        type: 'select',
        option: ['none', 'top', 'left', 'right', 'bottom'],
      },
    },
    size: {
      control: {
        type: 'range',
        option: {
          min: 16,
          max: 100,
          step: 1,
        },
      },
    },
    children: {
      control: 'text',
    },
  },
};

const Template = (args) => (
  <>
    <Button {...args} />
    <InitSVG />
  </>
);

export const Default = Template.bind({});
Default.args = {
  iconType: null,
  buttonType: 'default',
  as: 'button',
  flatBorderSide: 'none',
  size: 16,
  children: 'text',
};

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  buttonType: 'outline',
};

export const Highlight = Template.bind({});
Highlight.args = {
  ...Default.args,
  buttonType: 'highlight',
};
