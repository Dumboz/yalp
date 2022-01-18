import { Tags } from './Tags';

export default {
  title: 'Tags',
  component: Tags,
};

const Template = args => (
  <>
    <Tags {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  fontSize: 24,
  children: 'hi',
};
