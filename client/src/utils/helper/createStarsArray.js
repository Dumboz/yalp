export const createStarsArray = (score, width) => {
  let fullNum = Math.floor(score);
  let halfNum = Math.ceil(score) !== Math.floor(score) ? 1 : 0;

  const step = fullNum === 0 ? 100 : fullNum * 100;

  return Array.from({ length: 5 }, () => ({})).map(() => {
    if (fullNum-- > 0) {
      return { starType: 'full', step, width };
    }
    if (halfNum-- > 0) {
      return { starType: 'half', step, width };
    }
    return { starType: 'empty', step, width };
  });
};
