export const getSize = ({ size }) => size;
export const setRatioSize =
  (ratio) =>
  ({ size }) =>
    Math.floor(size * ratio);
