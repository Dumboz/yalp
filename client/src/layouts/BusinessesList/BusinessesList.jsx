import { RestaurantCard } from 'components';

export function BusinessesList({ businesses }) {
  return (
    <>
      {businesses.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </>
  );
}
