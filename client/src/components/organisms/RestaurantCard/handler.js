import { getHexaColor } from "styles/color";

  export const highlightMarker = (marker) => () => {
    if (!marker) return;

    marker.setIcon({
      ...marker.getIcon(),
      fillColor: getHexaColor('white', 100),
      strokeColor: getHexaColor('primary', 500),
    });

    marker.setLabel({
      ...marker.getLabel(),
      color: getHexaColor('primary', 500),
    });

    marker.setZIndex(marker.increasementZIndex());
  };

  export const restoreMarker = (marker) => () => {
    if (!marker) return;

    marker.setIcon({
      ...marker.getIcon(),
      fillColor: getHexaColor('primary', 500),
      strokeColor: getHexaColor('white', 100),
    });
    marker.setLabel({
      ...marker.getLabel(),
      color: getHexaColor('white', 100),
    });
  };
