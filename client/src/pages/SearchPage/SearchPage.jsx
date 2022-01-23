import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts';
import { GEO } from 'layouts/GEO/GEO';
import { SearchContainer } from './SearchPage.styled';

export function SearchPage() {
  const { search } = useLocation();
  const { data, error, isLoading } = useGetBusinessesQuery(search);

  let features = [];

  if (data) {
    // console.log(data?.businesses.map(({ coordinates }) => coordinates));
    features = data?.businesses.map(({ coordinates }) => coordinates);
  }

  return (
    <SearchContainer>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {data?.businesses && <BusinessesList businesses={data?.businesses} />}
      {data?.businesses && <GEO features={features} />}
    </SearchContainer>
  );
}
