import { ArrowButton } from './ArrowButton';
import { InitSVG } from 'components/InitSVG/InitSVG';
export default {
  title: 'ArrowButton',
  component: ArrowButton,
};

const Template = (args) => (
  <>
    <ArrowButton {...args} />
    <InitSVG />
  </>
);

export const Default = Template.bind({});

Default.args = { direct: 'right', size: 30, disabled: true, hover: true };
