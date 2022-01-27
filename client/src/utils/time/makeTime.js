export const makeTimeEn = (time) => {
  const noonType = +time > 1200 ? 'PM' : 'AM';
  let realTime = +time > 1200 ? '' + (+time - 1200) : time;

  return (
    realTime.padStart(4, '0').replace(/^../i, (e) => e + ':') + ' ' + noonType
  );
};

export const makeTimeKo = (time) => {
  const noonType = +time > 1200 ? '오후' : '오전';
  let realTime = +time > 1200 ? '' + (+time - 1200) : time;

  return (
    noonType + ' ' + realTime.padStart(4, '0').replace(/^../i, (e) => e + ':')
  );
};
