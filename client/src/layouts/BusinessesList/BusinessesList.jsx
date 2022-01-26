import { RestaurantCard } from 'components';
import styled from 'styled-components';

export function BusinessesList({ businesses, GEOArr }) {
  return (
    <BusinessesUl>
      {businesses.map((restaurant, index) => (
        <RestaurantCard
          index={index}
          key={restaurant.id}
          {...restaurant}
          GEOArr={GEOArr}
        />
      ))}
    </BusinessesUl>
  );
}

const BusinessesUl = styled.ul`
  flex: 0.44758 0 779px;
`;
