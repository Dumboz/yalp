import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts';
import { GEO } from 'layouts/GEO/GEO';
import { SearchContainer } from './SearchPage.styled';
import { store } from 'app/store';
import { useSelector, shallowEqual } from 'react-redux';

export function SearchPage() {
  const { search } = useLocation();
  const { data, error, isLoading } = useGetBusinessesQuery(search);
  let state = useSelector((state) => state, shallowEqual);

  let features = [];

  console.log(data?.businesses);
  console.log({ error });
  console.log({ isLoading });
  // console.log(
  //   store.getState().businessesApi.queries[
  //     'getBusinesses("?term=delis&latitude=37.786882&longitude=-122.399972")'
  //   ].data
  // );
  // console.log(state);
  // state.businessesApi = {};
  // let storeState = store.getState();
  // storeState.businessesApi = {};
  // console.log(store.getState());

  if (data) {
    console.log(data?.businesses.map(({ coordinates }) => coordinates));
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
