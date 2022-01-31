import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { RestaurantCard, TitleWrapper, Pagenation } from 'components';
import { BusinessesUl, Message, LoadingSpinner } from './BusinessesList.styled';
import { Circles } from 'react-loader-spinner';
import { getHexaColor } from 'styles/color';

function BusinessesList({ GEOArr }) {
  const { search } = useLocation();
  const { data, isLoading } = useGetBusinessesQuery(search);

  let businesses;

  if (!isLoading) {
    businesses = data?.businesses;
  }

  return (
    <TitleWrapper title={!isLoading && 'All Results'} containerMargin={20}>
      {isLoading ? (
        <LoadingSpinner>
          <Circles color={getHexaColor('primary', 300)} />
        </LoadingSpinner>
      ) : (
        <>
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
          <Pagenation />
        </>
      )}
    </TitleWrapper>
  );
}

export default memo(BusinessesList);
