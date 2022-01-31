import { BusinessHours } from './BusinessHours';

export default {
  title: 'BusinessHours',
  component: BusinessHours,
};

const Template = (args) => <BusinessHours {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: [
    {
      is_overnight: false,
      start: '1000',
      end: '2300',
      day: 0,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2300',
      day: 1,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2300',
      day: 2,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2300',
      day: 3,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2330',
      day: 4,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2330',
      day: 5,
    },
    {
      is_overnight: false,
      start: '1000',
      end: '2300',
      day: 6,
    },
  ],
  isOpenNow: false,
};
