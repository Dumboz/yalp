import { useGetRestaurantQuery } from 'services/businesses';
import { Location, Footer } from 'layouts';

export function DetailPage({ id }) {
  const { data, error, isLoading } = useGetRestaurantQuery(id);

  // photos, name, rating, is_closed, is_claimed, review_count, location?, hours, categories, display_phone
  // 으로 최상단 캐러셀 구현

  // location, hours로 location&hours 구현

  // restaurantReview.reviews로 리뷰 구현

  return (
    <>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && <Location />}
      <Footer />
    </>
  );
}
DetailPage.defaultProps = {
  id: 'MWV8AoySYObkfVpaLhaqKQ',
};
