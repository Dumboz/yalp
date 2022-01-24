import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts';
import { GEO } from 'layouts/GEO/GEO';
import { SearchContainer } from './SearchPage.styled';
import { FilterSection } from 'components';
import { updateBusinesses } from 'store/businesses';
import Pagenation from 'components/Pagenation/Pagenation';
import { Icon } from 'components/Icon/Icon';
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
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && <FilterSection />}
      {data?.businesses && <BusinessesList businesses={data?.businesses} />}
      {data?.businesses && <GEO features={features} />}
      {!isLoading && <Pagenation />}
    </SearchContainer>
  );
}
