export const makeTimeString = time => {
  const timeHour = Math.floor(+time / 100);
  const timeMin = +time % 100;

  const amPm = timeHour < 12 ? 'AM' : 'PM';
  const strHour = timeHour % 12 < 10 ? '0' + (timeHour % 12) : timeHour % 12;
  const strMin = timeMin < 10 ? '0' + timeMin : timeMin;

  return `${strHour} : ${strMin} ${amPm}`;
};
