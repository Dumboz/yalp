import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { Location, Footer, DetailBanner } from 'layouts';
import { Reviews } from 'components/Review/Reviews';
import { Circles } from 'react-loader-spinner';
import { getHexaColor } from 'styles/color';
import { Helmet } from 'react-helmet-async';
import { DetailPageLoadingSpinner, DetailMain } from './DetailPage.styled';
export function DetailPage() {
  const { pathname } = useLocation();
  const { error, data, isLoading } = useGetRestaurantQuery(pathname);
  const { restaurantDetail } = data;

  console.log(data);
  return (
    <>
      <Helmet>
        <title>{restaurantDetail.name}</title>
      </Helmet>
      {error && <>error</>}
      {isLoading && (
        <DetailPageLoadingSpinner>
          <Circles color={getHexaColor('primary', 300)} />
        </DetailPageLoadingSpinner>
      )}
      {!isLoading && (
        <>
          <DetailBanner />
          <DetailMain>
            <Location />
            <Reviews />
          </DetailMain>
          <Footer />
        </>
      )}
    </>
  );
}
