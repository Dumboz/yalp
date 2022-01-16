import { makeTimeKo } from 'utils';
import { OpenInfo, TimeInfo } from './Operation.styled';

export function Operation({ start, end, isOpenNow }) {
  const openState = isOpenNow ? 'Open' : 'Closed';
  const time = isOpenNow
    ? ' ' + makeTimeKo(start) + ' ~ ' + makeTimeKo(end)
    : ' untill ' + makeTimeKo(start);

  return (
    <>
      <OpenInfo isOpen={isOpenNow}>{openState}</OpenInfo>
      <TimeInfo>{time}</TimeInfo>
    </>
  );
}

Operation.defaultProps = {
  start: '1100',
  end: '2330',
  isOpenNow: true,
};
