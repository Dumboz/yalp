import { BusinessHours } from 'components';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';
import { makeQuery } from 'utils';
import { LocationContainer, LocationWrapper, Img } from './Location.styled';

const yelpIcon =
  'https://yelp-images.s3.amazonaws.com/assets/map-markers/annotation_32x43.png';

function Location() {
  const { pathname: id } = useLocation();
  const { data, error, isLoading } = useGetRestaurantQuery(id);

  if (isLoading) return <>...Loading</>;

  const {
    coordinates: { latitude, longitude },
    location: { display_address, cross_streets },
    hours: [{ open, is_open_now }],
  } = data.restaurantDetail;

  const locationInfoList = [...display_address, cross_streets];
  const staticImgOption = makeQuery({
    center: `${latitude},${longitude}`,
    zoom: 15,
    language: 'en',
    size: '420x200',
    markers: `scale:1|icon:${yelpIcon}|label:G|${latitude},${longitude}`,
    key: process.env.REACT_APP_MAP_API_KEY,
  });

  return (
    <>
      {error && <>error</>}
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

export default memo(Location);
