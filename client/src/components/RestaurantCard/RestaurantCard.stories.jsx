import { Comment } from 'components/Comment/Comment';
import { Service } from 'components/Service/Service';
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
  fontSize: 14,
  review: 'yes! this is review',
  categories: ['seafood', 'pizza'],
  serviceList: [
    <Service isServe={true}>Open dining</Service>,
    <Service isServe={false}>Delivery</Service>,
  ],
  filterList: [<Comment>Misson</Comment>, <Comment>$</Comment>],
};
