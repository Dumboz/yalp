import { RestaurantCard } from './RestaurantCard';

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
};

const Template = (args) => <RestaurantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  imgUrl:
    'https://s3-media1.fl.yelpcdn.com/bphoto/AHm5LPigScMuUG-bT9jqdw/o.jpg',
  name: 'Test',
  rating: 5,
  reviewCount: 1960,
  food: 'Pizza',
  location: 'Castro',
  phone: '2020-01-05',
};
