import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList, GEO, Footer } from 'layouts';
import {
  SearchContainer,
  GEOWrapper,
  FilterWrapper,
} from './SearchPage.styled';
import { FilterSection } from 'components';
import Pagenation from 'components/Pagenation/Pagenation';
import { TitleWrapper } from 'components';
import { useState } from 'react';

export function SearchPage() {
  const { search } = useLocation();
  const { error, isLoading } = useGetBusinessesQuery(search);
  const [GEOArr, setGEOArr] = useState([]);

  return (
    <>
      <SearchContainer>
        <FilterWrapper>
          <FilterSection />
        </FilterWrapper>
        {error && <>error</>}
        {isLoading && <>Loading...</>}
        {!isLoading && (
          <TitleWrapper title="All Results" containerMargin={20}>
            <BusinessesList GEOArr={GEOArr} />
            <Pagenation />
          </TitleWrapper>
        )}
        {!isLoading && (
          <GEOWrapper>
            <GEO setGEOArr={setGEOArr} />
          </GEOWrapper>
        )}
      </SearchContainer>
      <Footer />
    </>
  );
}
