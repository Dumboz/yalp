import { BusinessHours } from 'components/BusinessHours/BusinessHours';
import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { makeQuery } from 'utils';
import { LocationContainer, LocationWrapper, Img } from './Location.styled';

const api_key = 'AIzaSyAd3NJab1Ah3f59giU2nvfORfClh3_1xFo';
const yelpIcon =
  'https://yelp-images.s3.amazonaws.com/assets/map-markers/annotation_32x43.png';

export function Location() {
  const { pathname: id } = useLocation();
  const { data, error, isLoading } = useGetRestaurantQuery(id);
  let locationInfoList = [];
  let staticImgOption = '';
  let latitude;
  let longitude;
  let open;
  let is_open_now;

  if (!isLoading) {
    const { display_address, cross_streets } = data.restaurantDetail.location;
    locationInfoList = [...display_address, cross_streets];
    latitude = data.restaurantDetail.coordinates.latitude;
    longitude = data.restaurantDetail.coordinates.longitude;
    staticImgOption = makeQuery({
      center: `${latitude},${longitude}`,
      zoom: 15,
      language: 'en',
      size: '420x200',
      markers: `scale:1|icon:${yelpIcon}|label:G|${latitude},${longitude}`,
      key: api_key,
    });
    open = data.restaurantDetail.hours[0].open;
    is_open_now = data.restaurantDetail.hours[0].is_open_now;
  }

  return (
    <>
      {error && <>error</>}
      {isLoading && <>Loading...</>}
      {!isLoading && (
        <LocationContainer>
          <LocationWrapper>
            <figure>
              <h4>Location & Hours</h4>
              <Img
                src={encodeURI(
                  `https://maps.googleapis.com/maps/api/staticmap?${staticImgOption}`
                )}
                alt={data.restaurantDetail.name}
              />
              <figcaption>
                {locationInfoList.map((locationInfo) => (
                  <p>{locationInfo}</p>
                ))}
              </figcaption>
            </figure>
            <BusinessHours open={open} isOpenNow={is_open_now} />
          </LocationWrapper>
        </LocationContainer>
      )}
    </>
  );
}
