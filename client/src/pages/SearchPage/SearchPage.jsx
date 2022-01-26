import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList, GEO, Footer } from 'layouts';
import {
  SearchContainer,
  GEOWrapper,
  FilterWrapper,
  LoadingSpinner,
} from './SearchPage.styled';
import { FilterSection } from 'components';
import Pagenation from 'components/Pagenation/Pagenation';
import { TitleWrapper } from 'components';
import { useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { getHexaColor } from 'styles/color';
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

        <TitleWrapper title={!isLoading && 'All Results'} containerMargin={20}>
          {isLoading && (
            <LoadingSpinner>
              <Circles color={getHexaColor('primary', 300)} />
            </LoadingSpinner>
          )}
          {!isLoading && (
            <>
              <BusinessesList GEOArr={GEOArr} />
              <Pagenation />
            </>
          )}
        </TitleWrapper>
        {!isLoading && (
          <GEOWrapper>
            <GEO setGEOArr={setGEOArr} />
          </GEOWrapper>
        )}
      </SearchContainer>
      {!isLoading && <Footer />}
    </>
  );
}
