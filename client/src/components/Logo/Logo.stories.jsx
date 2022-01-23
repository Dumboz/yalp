import { Logo } from './Logo';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['logo', 'backgroundlogo'],
      },
    },
  },
};

const Template = args => (
  <>
    <Logo {...args} />
    <InitSVG />
  </>
);

export const Default = Template.bind({});
Default.args = {
  type: 'logo',
  size: 190,
};
