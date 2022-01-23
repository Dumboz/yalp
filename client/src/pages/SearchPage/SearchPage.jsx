import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { BusinessesList } from 'layouts/BusinessesList/BusinessesList';
import { FilterSection } from 'components';

export function SearchPage() {
  // const [restaurantList, setRestauranList] = useState([]);
  const { search } = useLocation();
  // const {offset} = querySt
  const { data, error, isLoading } = useGetBusinessesQuery(search);

  // console.log(data?.businesses);
  // console.log({ error });
  // console.log({ isLoading });

  return (
    <>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && <FilterSection />}
      {data?.businesses && <BusinessesList businesses={data?.businesses} />}
    </>
  );
}
