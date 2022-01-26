import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts';
import { GEO } from 'layouts/GEO/GEO';
import {
  SearchContainer,
  GEOWrapper,
  FilterWrapper,
} from './SearchPage.styled';
import { FilterSection } from 'components';
import { updateBusinesses } from 'store/businesses';
import Pagenation from 'components/Pagenation/Pagenation';
import { TitleWrapper } from 'components';
import { useState } from 'react';

export function SearchPage() {
  const { search } = useLocation();
  const { data, error, isLoading } = useGetBusinessesQuery(search);
  const [GEOArr, setGEOArr] = useState([]);

  return (
    <SearchContainer>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && (
        <FilterWrapper>
          <FilterSection />
        </FilterWrapper>
      )}
      {!isLoading && data?.businesses && (
        <TitleWrapper title="All Results" containerMargin={20}>
          <BusinessesList businesses={data?.businesses} GEOArr={GEOArr} />
          <Pagenation />
        </TitleWrapper>
      )}
      {data?.businesses && (
        <GEOWrapper>
          <GEO
            features={data?.businesses.map(({ coordinates }) => coordinates)}
            businesses={data?.businesses}
            GEOArr={GEOArr}
            setGEOArr={setGEOArr}
          />
        </GEOWrapper>
      )}
    </SearchContainer>
  );
}
