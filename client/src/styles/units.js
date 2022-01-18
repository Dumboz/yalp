const deunit = unit => parseInt(unit, 10);
const px2unit = (pxValue, base = 16) => deunit(pxValue) / base;

export const px2em = (pxValue, base) => `${px2unit(pxValue, base)}em`;

export const px2rem = (pxValue, base) => `${px2unit(pxValue, base)}rem`;
