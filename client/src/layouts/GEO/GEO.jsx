import QueryString from 'qs';
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Map, MapWrapper } from './GEO.styled';
import { useLocation } from 'react-router-dom';
import { useGetBusinessesQuery } from 'services/businesses';
import { setMap } from './setMap';

export function GEO({ setGEOArr }) {
  let businesses;
  let markerPositions;

  const ref = useRef();
  const { search } = useLocation();
  const { data, isLoading } = useGetBusinessesQuery(search);

  if (!isLoading) {
    markerPositions = data?.businesses.map(({ coordinates }) => coordinates);
    businesses = data?.businesses;
  }

  useEffect(() => {
    let zIndex = 100;
    let increasementZIndex = () => zIndex++;

    const loader = new Loader({
      apiKey: process.env.REACT_APP_MAP_API_KEY,
      version: 'weekly',
    });
    loader
      .load()
      .then(
        setMap(
          ref,
          QueryString.parse(search.replace(/^\?/, ''))?.location,
          markerPositions,
          businesses,
          increasementZIndex,
          setGEOArr
        )
      );
  }, [businesses]);

  return (
    <MapWrapper>
      <Map id="map" ref={ref} />
    </MapWrapper>
  );
}
