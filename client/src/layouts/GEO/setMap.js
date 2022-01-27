import { renderToString } from 'react-dom/server';
import { getHexaColor } from 'styles/color';
import { MapCard } from './MapCard';

const mapOptions = {
  center: null,
  zoom: 13,
};

export const setMap =
  (ref, address, markerPositions, businesses, increasementZIndex, setGEOArr) =>
  (google) => {
    let markerTempArr = [];
    let map = new google.maps.Map(ref.current, mapOptions);
    let geocoder = new google.maps.Geocoder();

    // Geocoder
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Marker
    const postions = markerPositions.map(({ latitude, longitude }) => ({
      position: new google.maps.LatLng(latitude, longitude),
    }));

    const markerIcon = {
      path: 'M35,17.5c0,7.7-4.9,14.2-11.8,16.5c-1.8,0.6-5.7,4.6-5.7,4.6s-3.9-4-5.7-4.6C4.9,31.7,0,25.2,0,17.5C0,7.8,7.8,0,17.5,0S35,7.8,35,17.5z',
      anchor: new google.maps.Point(0, 0),
      labelOrigin: new google.maps.Point(17, 18),
      fillColor: getHexaColor('primary', 500),
      strokeColor: getHexaColor('white', 100),
      fillOpacity: 1,
      strokeWeight: 2.3,
      scale: 0.8,
    };

    const markerLabel = {
      color: getHexaColor('white', 100),
      fontSize: '13px',
      fontWeight: 'bold',
    };

    postions.forEach(({ position }, i) => {
      const marker = new google.maps.Marker({
        position,
        map: map,
        icon: markerIcon,
        label: { ...markerLabel, text: `${i + 1}` },
        title: businesses[i].name,
      });
      marker.increasementZIndex = increasementZIndex;

      marker.addListener('mouseover', () => {
        infoWindow.close();

        marker.setIcon({
          ...markerIcon,
          fillColor: getHexaColor('white', 100),
          strokeColor: getHexaColor('primary', 500),
        });

        marker.setLabel({
          ...marker.getLabel(),
          color: getHexaColor('primary', 500),
        });

        marker.setZIndex(increasementZIndex());

        const infoBox = document.createElement('div');
        infoBox.innerHTML = renderToString(<MapCard {...businesses[i]} />);
        infoWindow.setContent(infoBox);

        infoWindow.open(marker.getMap(), marker);
      });

      marker.addListener('mouseout', () => {
        marker.setIcon({
          ...markerIcon,
          fillColor: getHexaColor('primary', 500),
          strokeColor: getHexaColor('white', 100),
        });
        marker.setLabel({
          ...marker.getLabel(),
          color: getHexaColor('white', 100),
        });
        infoWindow.close();
      });
      markerTempArr.push(marker);
    });

    setGEOArr(markerTempArr);
  };
