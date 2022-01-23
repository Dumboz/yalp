import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Map, MapWrapper } from './GEO.styled';
export function GEO({ features: featuresList }) {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAd3NJab1Ah3f59giU2nvfORfClh3_1xFo',
      version: 'weekly',
    });

    let map;

    const mapOptions = {
      center: {
        lat: 37.786882,
        lng: -122.399972,
      },
      zoom: 14,
    };

    loader.load().then((google) => {
      map = new google.maps.Map(document.getElementById('map'), mapOptions);

      const features = featuresList.map(({ latitude, longitude }) => ({
        position: new google.maps.LatLng(latitude, longitude),
      }));

      features.forEach((features) => {
        new google.maps.Marker({
          position: features.position,
          map: map,
        });
      });
    });
  }, []);

  return (
    <MapWrapper>
      <Map id="map" />
    </MapWrapper>
  );
}
