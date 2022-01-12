export const getSize = ({ size }) => size;
export const setMargin =
  ratio =>
  ({ size }) =>
    Math.floor(size * ratio);
export const getWidth = ({ width }) => width;
export const getHeight = ({ height }) => height;
