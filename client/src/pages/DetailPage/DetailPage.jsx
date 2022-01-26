import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { Location, Footer, DetailBanner } from 'layouts';
import { Reviews } from 'components/Review/Reviews';

export function DetailPage() {
  const { pathname } = useLocation();
  const { error, isLoading } = useGetRestaurantQuery(pathname);
  return (
    <>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && <DetailBanner />}
      {!isLoading && <Location />}
      {!isLoading && <Reviews />}
      {!isLoading && <Footer />}
    </>
  );
}
