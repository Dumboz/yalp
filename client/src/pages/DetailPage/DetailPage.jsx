import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { Location, Footer, DetailBanner } from 'layouts';
import { Reviews } from 'components/Review/Reviews';
import { Circles } from 'react-loader-spinner';
import { getHexaColor } from 'styles/color';
import { Helmet } from 'react-helmet-async';
import { DetailPageLoadingSpinner, DetailMain } from './DetailPage.styled';
export default function DetailPage() {
  const { pathname } = useLocation();
  const { error, data, isLoading } = useGetRestaurantQuery(pathname);

  if (isLoading)
    return (
      <DetailPageLoadingSpinner>
        <Circles color={getHexaColor('primary', 300)} />
      </DetailPageLoadingSpinner>
    );

  const restaurantDetail = data.restaurantDetail;

  return (
    <>
      <Helmet>
        <title>{restaurantDetail?.name || 'Detail Page'}</title>
        <meta name="robots" content="ALL" />
        <meta
          name="keywords"
          content={`yalp, restaurant, ${restaurantDetail?.name}`}
        />
        <meta name="author" content="Dumboz" />
        <meta name="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=en" />
        <meta
          name="description"
          content={restaurantDetail?.name || 'Detail Page'}
        />
      </Helmet>
      {error && <>error</>}
      <DetailBanner />
      <DetailMain>
        <Location />
        <Reviews />
      </DetailMain>
      <Footer />
    </>
  );
}
