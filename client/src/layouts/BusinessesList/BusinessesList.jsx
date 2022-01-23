import { RestaurantCard } from 'components';
import styled from 'styled-components';

export function BusinessesList({ businesses }) {
  return (
    <BusinessesUl>
      {businesses.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </BusinessesUl>
  );
}

const BusinessesUl = styled.ul`
  flex: 0.44758 0 779px;
`;
