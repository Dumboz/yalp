const HEXA_COLOR = {
  ORANGE: '#FF8B4A',
  RED: '#FA5239',
  YELLOW: '#ffffff',
  GRAY: '#C4C4C4',
};

export const getHexaColor = color => {
  const hexaColor = HEXA_COLOR[color.toUpperCase()];
  if (!hexaColor) {
    throw new Error('해당 색상은 존재하지 않습니다.');
  }
  return hexaColor;
};
