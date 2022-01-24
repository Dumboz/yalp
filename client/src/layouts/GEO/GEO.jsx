import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Map, MapWrapper } from './GEO.styled';
import { setAddress } from 'store/mapSlice';
import { useSelector, useDispatch } from 'react-redux';

export function GEO({ features: featuresList }) {
  const ref = useRef();

  const address = useSelector((state) => state.map.address);
  const dispatch = useDispatch();
  console.log(address);
  setTimeout(() => {
    dispatch(setAddress('New York'));
  }, 1000);
  console.log(address);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAd3NJab1Ah3f59giU2nvfORfClh3_1xFo',
      version: 'weekly',
    });
    loader.load().then((google) => {
      const mapOptions = {
        center: new google.maps.LatLng(37.786882, -122.399972),
        zoom: 14,
      };

      let map = new google.maps.Map(ref.current, mapOptions);
      let geocoder = new google.maps.Geocoder();

      // Geocoder
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          console.log(results);
          map.setCenter(results[0].geometry.location);
        } else {
          alert(
            'Geocode was not successful for the following reason: ' + status
          );
        }
      });

      // Marker
      const features = featuresList.map(({ latitude, longitude }) => ({
        position: new google.maps.LatLng(latitude, longitude),
      }));

      features.forEach((features) => {
        new google.maps.Marker({
          position: features.position,
          map: map,
        });
      });

      // new google.maps.Geocoder().geocode({ latLng }, (results, status) => {});
    });
  });

  return (
    <MapWrapper>
      <Map id="map" ref={ref} />
    </MapWrapper>
  );
}
