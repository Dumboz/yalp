import { color } from './theme';

export const getHexaColor = (type, step) => {
  const colorType = color[type];

  if (type === 'white') return colorType;

  if (!colorType) {
    throw new Error(`${colorType}: 해당 색상은 존재하지 않습니다.`);
  }

  const hexaColor = colorType[step.toString()];
  if (!hexaColor) {
    throw new Error(
      `${hexaColor}: ${colorType}에서 해당 step은 존재하지 않습니다.`
    );
  }

  return hexaColor;
};
