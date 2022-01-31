import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList, FilterSection, Footer, GEO } from 'components';
import {
  SearchContainer,
  GEOWrapper,
  FilterWrapper,
} from './SearchPage.styled';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SearchPage() {
  const { search } = useLocation();
  const { isLoading } = useGetBusinessesQuery(search);
  const [GEOArr, setGEOArr] = useState([]);
  const { location } = QueryString.parse(search);
  const keywords = Object.values(QueryString.parse(search)).join(',');

  return (
    <>
      <Helmet>
        <title>The Best 10 Restaurants in {location}</title>
        <meta
          name="description"
          content={`The Best 10 Restaurants in ${location}`}
        />
        <meta name="robots" content="ALL" />
        <meta name="keywords" content={`yalp, restaurant, ${location}`} />
        <meta name="author" content="Dumboz" />
        <meta name="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=en" />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <SearchContainer>
        <FilterWrapper>
          <FilterSection />
        </FilterWrapper>
        <BusinessesList GEOArr={GEOArr} />
        <GEOWrapper>
          <GEO setGEOArr={setGEOArr} />
        </GEOWrapper>
      </SearchContainer>
      {!isLoading && <Footer />}
    </>
  );
}
