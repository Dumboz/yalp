export const getSize = ({ size }) => size;
export const setMargin =
  (ratio) =>
  ({ size }) =>
    Math.floor(size * ratio);
