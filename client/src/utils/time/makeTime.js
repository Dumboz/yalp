export const makeTimeEn = (time) => {
  const noonType = +time > 1200 ? 'PM' : 'AM';
  let realTime = +time > 1200 ? '' + (+time - 1200) : time;

  return realTime.replace(/^../i, (e) => e + ':') + ' ' + noonType;
};

export const makeTimeKo = (time) => {
  const noonType = +time > 1200 ? '오전' : '오후';
  let realTime = +time > 1200 ? '' + (+time - 1200) : time;

  return noonType + ' ' + realTime.replace(/^../i, (e) => e + ':');
};
