import { Comment } from 'components/atoms/Comment/Comment';
import { Service } from 'components/atoms/Service/Service';
import { RestaurantCard } from './RestaurantCard';

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
};

const Template = (args) => <RestaurantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '/',
  image_url:
    'https://s3-media1.fl.yelpcdn.com/bphoto/AHm5LPigScMuUG-bT9jqdw/o.jpg',
  name: 'Test',
  rating: 5,
  review_count: 1960,
  fontSize: 14,
  review: 'yes! this is review',
  categories: ['seafood', 'pizza'],
  transactions: ['Open dining', 'Delivery'],
  featureList: [<Comment>$</Comment>],
};
