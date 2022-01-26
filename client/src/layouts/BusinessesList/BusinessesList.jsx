import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { RestaurantCard } from 'components';
import styled from 'styled-components';

export function BusinessesList({ GEOArr }) {
  const { search } = useLocation();
  const { data, isLoading } = useGetBusinessesQuery(search);

  let businesses;

  if (!isLoading) {
    businesses = data?.businesses;
  }

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
