import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { RestaurantCard } from 'components';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import React from 'react';

const Message = React.memo(styled.div`
  margin-top: 60px;
  color: ${getHexaColor('gray', 400)};
`);

export function BusinessesList({ GEOArr }) {
  const { search } = useLocation();
  const { data, isLoading } = useGetBusinessesQuery(search);

  let businesses;

  if (!isLoading) {
    businesses = data?.businesses;
  }

  return (
    <BusinessesUl>
      {businesses.length ? (
        businesses.map((restaurant, index) => (
          <RestaurantCard
            index={index}
            key={restaurant.id}
            {...restaurant}
            GEOArr={GEOArr}
          />
        ))
      ) : (
        <Message>Oops... No results were found for your search.</Message>
      )}
    </BusinessesUl>
  );
}

const BusinessesUl = styled.ul`
  flex: 0.44758 0 779px;
`;
