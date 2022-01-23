import { array } from 'prop-types';
import { FilterModal } from './FilterModal';

export default {
  title: 'FilterModal',
  component: FilterModal,
  argTypes: {
    options: array,
  },
};

const Template = (args) => <FilterModal {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  options: ['$', '$$', '$$$', '$$$$'],
};
