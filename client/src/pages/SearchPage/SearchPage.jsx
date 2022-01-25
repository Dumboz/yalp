import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts';
import { GEO } from 'layouts/GEO/GEO';
import { SearchContainer } from './SearchPage.styled';
import { FilterSection } from 'components';
import { updateBusinesses } from 'store/businesses';
import Pagenation from 'components/Pagenation/Pagenation';
import { TitleWrapper } from 'components';
import styled from 'styled-components';

const GEOWrapper = styled.div`
  width: 50%;
  position: relative;
`;

const FilterWrapper = styled.div`
  width: 30%;
  position: relative;
`;

export function SearchPage() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { data, error, isLoading } = useGetBusinessesQuery(search);

  let features = [];

  if (data) {
    features = data?.businesses.map(({ coordinates }) => coordinates);
  }
  if (isLoading) {
    dispatch(updateBusinesses({ error, isLoading }));
  } else {
    dispatch(
      updateBusinesses({
        businesses: data.businesses,
        total: data.total,
        region: data.region,
        error,
        isLoading,
      }),
    );
  }

  return (
    <SearchContainer>
      <FilterWrapper>
        <FilterSection />
      </FilterWrapper>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && data?.businesses && (
        <TitleWrapper title="All Results" containerMargin={20}>
          <BusinessesList businesses={data?.businesses} />
          {!isLoading && <Pagenation />}
        </TitleWrapper>
      )}
      {data?.businesses && (
        <GEOWrapper>
          <GEO features={features} />
        </GEOWrapper>
      )}
    </SearchContainer>
  );
}
