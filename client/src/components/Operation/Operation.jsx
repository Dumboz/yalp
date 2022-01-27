import { makeTimeKo } from 'utils';
import { OpenInfo, TimeInfo, OperationWrapper } from './Operation.styled';
import { Skeleton } from 'components/Skeleton/Skeleton.styled';

export function Operation({ start, end, isOpenNow, size }) {
  if (!(start && end)) return <Skeleton />;
  if (start === '0000' && end === '0000') return null;

  const openState = isOpenNow ? 'Open' : 'Closed';
  const time = isOpenNow
    ? ' ' + makeTimeKo(start) + ' ~ ' + makeTimeKo(end)
    : ' untill ' + makeTimeKo(start);

  return (
    <OperationWrapper size={size}>
      <OpenInfo isOpen={isOpenNow}>{openState}</OpenInfo>
      <TimeInfo>{time}</TimeInfo>
    </OperationWrapper>
  );
}

Operation.defaultProps = {
  start: '1100',
  end: '2330',
  isOpenNow: true,
};
